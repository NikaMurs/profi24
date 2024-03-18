from fastapi import status, Depends, Response, HTTPException, Cookie, Header
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from auth.password import verify_password
from schemas import UserCreate, Message, UserTelephone
from database import get_async_session, async_session_maker
from typing import Dict, Any, Optional
from auth.settings import manager, get_user, create_user,forgot_password
from fastapi import APIRouter


auth_router = APIRouter()


@auth_router.post("/login",
          tags=["auth"],
          response_model=Dict[str, Any],
          status_code=status.HTTP_200_OK)
async def login(response: Response,
                data: OAuth2PasswordRequestForm = Depends()):
    """
    EndPoint для австоризации

    Поле username принимает телефон

    --------INPUT----------

    @username - *telephone* string(length=11). Формат: 88005553535

    @password - string(length=100).

    Перевожу его в хеш, поэтому валидацию на фронте необходимо выполнять

    --------OUTPUT----------

    HTTP_200_OK

    {"access_token": "<JWT токен>"}  Записывается в cookie

    Время жизни - 72 часа (по истечению необходимо перекидывать на страницу авторизации)

    HTTP_404_NOT_FOUND

    {"detail": "User not found"}
    """

    telephone = data.username
    password = data.password

    user = await get_user(telephone)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
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
    """
    EndPoint для регистрации пользователя

    --------INPUT----------

    @telephone - string(length=11). Формат: 88005553535

    @password - string(length=100)

    --------OUTPUT----------

    HTTP_201_CREATE

    {"message": "CREATED"}

    HTTP_400_BAD_REQUEST

    {"detail": "User with this telephone already exists"}

    HTTP_401_UNAUTHORIZED - срок жизни токена истек - перекидывай на авторизацию

    {"detail": "Invalid credentials"}

    """
    await create_user(db=db, user=user)
    return {"message": "CREATED"}


@auth_router.post("/logout",
          tags=["auth"],
          response_model=Message,
          status_code=status.HTTP_200_OK)
def logout(response: Response,
           user=Depends(manager)):
    """
    EndPoint для выхода

    --------INPUT----------

    --------OUTPUT----------

    HTTP_200_OK

    {"message": "done"} Cookie пустое
    Изменяет токен на пустой (но оставляет имя токена у пользователя) custom-cookie-name=""

    """
    manager.set_cookie(response=response, token="")
    return {"message": "done"}


@auth_router.patch("/forget-password",
                   tags=["auth"],
                   response_model=Message,
                   status_code=status.HTTP_200_OK)
async def reset_password(telephone: str,
                         password: str,
                         db: AsyncSession = Depends(get_async_session)):
    """
    Сброс пароля по номеру телефона

     --------INPUT----------

     @telephone: поиск пользователя по номеру телефона

    @password: новый пароль пользователя

    --------OUTPUT----------

    HTTP_200_OK - {"message": "done"}

    HTTP_404_NOT_FOUND {"detail":"Telephone not found"}
    """
    data = await forgot_password(db, telephone, password)
    if data is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail='Telephone not found')
    return {"message": "done"}


@auth_router.get("/profile")
def protected_route(user=Depends(manager)):
    """
    (Только для авторизированных пользователей)

    Тестовый endpoint для проверки JWT, Cookie и авторизации/регистрации

    Возвращает пользователя из базы С ХЕШЕМ ЕГО ПАРОЛЯ

    В бою использовать его не будем
    """

    return {"user": user}



