from fastapi import APIRouter, status, Depends
from fastapi.encoders import jsonable_encoder
from schemas import UserFullInfo
from models import User
from auth.settings import manager, get_user_info_start
from typing import Dict, Any
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_async_session, test_connection

user_router = APIRouter()


@user_router.get("/",
                 response_model=Dict[str, Any],
                 status_code=status.HTTP_200_OK)
def get_user_info(user=Depends(manager),
                  db: AsyncSession = Depends(get_async_session)):
    """
    (Только для авторизированных пользователей)

    Возвращает стартовую информацию о пользователе

    """

    user_info = {
        "id": user.id,
        "first_name": user.first_name,
        "name": user.name,
        "secondName": user.second_name,
        "money": user.money,
        "bonus": user.bonus,
        "bonusStatus": user.bonusStatus
    }

    return {"user": user_info}


@user_router.get("/lk/edit/",
                 response_model=Dict[str, Any],
                 status_code=status.HTTP_200_OK)
def get_user_full_info(user=Depends(manager),
                       db: AsyncSession = Depends(get_async_session)):
    """
    (Только для авторизированных пользователей)

    Возвращает дополнительную информацию о пользователе

    """

    user_full_info = {
        "country": user.country,
        "city": user.city,
        "street": user.street,
        "profession": user.profession,
        "countBook": user.countBook,
        "site": user.site,
        "vk": user.vk,
        "telegram": user.telegram,
        "whatsapp": user.whatsapp
    }

    return {"info": user_full_info}


@user_router.patch("/lk/edit/",
                 response_model=UserFullInfo,
                 status_code=status.HTTP_200_OK)
async def edit_user_full_info(full_info: UserFullInfo,
                              user=Depends(manager),
                              db: AsyncSession = Depends(get_async_session)):

    data = await db.execute(select(User).where(User.telephone == user.telephone))
    user_data = data.scalars().first()

    for field, value in full_info.dict(exclude_unset=True).items():
        setattr(user_data, field, value)

    await db.commit()
    return user_data


@user_router.get("/test",
                 status_code=status.HTTP_200_OK)
async def test(db: AsyncSession = Depends(get_async_session)):
    await test_connection(db)
    return {"Connection": "Connection success"}
