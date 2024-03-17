from fastapi import status, Depends, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from auth.password import verify_password
from schemas import UserCreate, Message
from database import get_async_session, async_session_maker
from typing import Dict, Any
from auth.settings import manager, get_user, create_user
from fastapi import APIRouter


auth_router = APIRouter()


@auth_router.post("/login",
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


@auth_router.post("/registration",
          tags=["auth"],
          response_model=Message,
          status_code=status.HTTP_201_CREATED)
async def registration(user: UserCreate,
                       db: AsyncSession = Depends(get_async_session)):
    await create_user(db=db, user=user)
    return {"message": "CREATED"}


@auth_router.post("/logout",
          tags=["auth"],
          response_model=Message,
          status_code=status.HTTP_200_OK)
def logout(response: Response,
           user=Depends(manager)):
    manager.set_cookie(response=response, token="")
    return {"message": "done"}


@auth_router.get("/profile")
def protected_route(user=Depends(manager)):
    return {"user": user}



