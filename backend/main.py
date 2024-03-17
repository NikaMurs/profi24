from datetime import timedelta
from fastapi import FastAPI, status, Depends, HTTPException, Response
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login import LoginManager
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from password import verify_password, get_password_hash
from models import User
from schemas import UserCreate, Message
from database import get_async_session, async_session_maker
from config import SECRET
from typing import Dict, Any

app = FastAPI(
    title="Заказ печати"
)

manager = LoginManager(SECRET,
                       "/login",
                       use_cookie=True,
                       cookie_name='custom-cookie-name',
                       use_header=False,
                       default_expiry=timedelta(hours=72))


@manager.user_loader()
async def get_user(telephone: str):
    async with async_session_maker() as session:
        data = select(User).filter(User.telephone == telephone)
        result = await session.execute(data)
        return result.scalar()


@app.post("/login",
          tags=["auth"],
          response_model=Dict[str, Any],
          status_code=status.HTTP_200_OK)
async def login(response: Response,
                data: OAuth2PasswordRequestForm = Depends()):
    telephone = data.username
    password = data.password

    user = await get_user(telephone)
    if not user:
        raise status.HTTP_404_NOT_FOUND
    elif verify_password(password, user.hashed_password):
        access_token = manager.create_access_token(data={"sub": telephone})
        manager.set_cookie(response, access_token)
        return {"access_token": access_token}


async def create_user(db: AsyncSession,
                      user: UserCreate):
    existing_user = await db.execute(select(User).where(User.telephone == user.telephone))
    existing_user = existing_user.scalars().first()
    if existing_user:
        raise HTTPException(status_code=400, detail="User with this telephone already exists")

    password = get_password_hash(user.hashed_password)
    data = User(
        telephone=user.telephone,
        hashed_password=password,
        is_active=True
    )

    db.add(data)
    await db.commit()
    await db.refresh(data)
    await db.close()
    return data


@app.post("/registration",
          tags=["auth"],
          response_model=Message,
          status_code=status.HTTP_201_CREATED)
async def registration(user: UserCreate,
                       db: AsyncSession = Depends(get_async_session)):
    await create_user(db=db, user=user)
    return {"message": "CREATED"}


@app.post("/logout",
          tags=["auth"],
          response_model=Message,
          status_code=status.HTTP_200_OK)
def logout(response: Response,
           user=Depends(manager)):
    manager.set_cookie(response=response, token="")
    return {"message": "done"}


@app.get("/profile")
def protected_route(user=Depends(manager)):
    return {"user": user}

