from fastapi import FastAPI, status, Depends, HTTPException, Response
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login import LoginManager
from fastapi_login.exceptions import InvalidCredentialsException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from password import verify_password
from models import User
from database import get_async_session, async_session_maker
from config import SECRET

app = FastAPI(
    title="Заказ печати"
)

manager = LoginManager(SECRET,
                       "/login",
                       use_cookie=True,
                       cookie_name='custom-cookie-name',
                       use_header=False)


@manager.user_loader()
async def get_user(telephone: str):
    async with async_session_maker() as session:
        data = select(User).filter(User.telephone == telephone)
        result = await session.execute(data)
        return result.scalar()


@app.get("/test", status_code=status.HTTP_200_OK)
async def read_user(telephone: str,
                    db: AsyncSession = Depends(get_async_session)):
    data = await get_user(db, telephone)
    if data is None:
        raise HTTPException(status_code=404, detail="User not found")
    return data


@app.post("/login")
async def login(response: Response,
                data: OAuth2PasswordRequestForm = Depends(),
                db: AsyncSession = Depends(get_async_session)):
    telephone = data.username
    password = data.password

    user = await get_user(db, telephone)
    if not user:
        # you can return any response or error of your choice
        raise InvalidCredentialsException
    elif verify_password(password, user.hashed_password):
        raise InvalidCredentialsException

    access_token = manager.create_access_token(data={"sub": telephone})
    manager.set_cookie(response, access_token)
    return {"access_token": access_token}


@app.get("/protected")
def protected_route(user=Depends(manager)):
    return {"user": user}

