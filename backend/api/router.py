from fastapi import APIRouter, status, Depends
from schemas import UserFullInfo
from models import User
from auth.settings import manager, get_user_info_start
from typing import Dict, Any
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_async_session

user_router = APIRouter()


@user_router.get("/",
                 response_model=Dict[str, Any],
                 status_code=status.HTTP_200_OK)
def get_user_info(user=Depends(manager)):
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
def get_user_full_info(user=Depends(manager)):
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
async def edit_user_full_info(country: str,
                              city: str,
                              street: str,
                              profession: str,
                              countBook: int,
                              site: str,
                              vk: str,
                              telegram: str,
                              whatsapp: str,
                              user=Depends(manager),
                              db: AsyncSession = Depends(get_async_session)):

    data = await db.execute(select(User).where(User.telephone == user.telephone))
    data = data.scalars().first()

    data.country = country
    data.city = city
    data.street = street
    data.profession = profession
    data.countBook = countBook
    data.site = site
    data.vk = vk
    data.telegram = telegram
    data.whatsapp = whatsapp

    await db.commit()

    return data
