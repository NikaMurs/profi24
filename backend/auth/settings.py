from datetime import timedelta
from fastapi import HTTPException, status, Depends
from fastapi_login import LoginManager
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from auth.password import get_password_hash, verify_password
from models import User
from schemas import UserCreate, Message, UserInfo
from database import get_async_session, async_session_maker, test_connection, engine
from config import SECRET
from sqlalchemy.orm import sessionmaker

manager = LoginManager(SECRET,
                       "/login",
                       cookie_name='custom-cookie-name',
                       default_expiry=timedelta(hours=72))


@manager.user_loader()
async def get_user(telephone: str):
    """
    Функция для получения пользователя
    """
    async with async_session_maker() as session:
        await test_connection(session=session)
        data = await session.execute(select(User).filter(User.telephone == telephone))
        result = data.scalars().first()
        return result


async def get_admin_user(user=Depends(manager)):
    """
    Функция для получения пользователя-администратора.

    Проверяет, является ли пользователь администратором. Если да, возвращает пользователя, иначе генерирует ошибку HTTP 403 Forbidden.
    """
    if not user.is_superuser:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Only admins can access this endpoint")
    return user


async def get_user_info_start(db: AsyncSession,
                              telephone: str):
    existing_user = await db.execute(select(User).where(User.telephone == telephone))
    existing_user = existing_user.scalars().first()

    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User with this telephone already exists")

    data = User(
        id=user.id,
        first_name=user.first_name,
        name=user.name,
        second_name=user.second_name,
        money=user.money,
        bonus=user.bonus,
        bonusStatus=user.bonusStatus
    )
    return data


async def create_user(db: AsyncSession,
                      user: UserCreate):
    existing_user = await db.execute(select(User).where(User.telephone == user.telephone))
    existing_user = existing_user.scalars().first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User with this telephone already exists")

    password = get_password_hash(user.hashed_password)
    data = User(
        first_name=user.first_name,
        name=user.name,
        second_name=user.second_name,
        telephone=user.telephone,
        email=user.email,
        hashed_password=password,
        is_active=True
    )

    db.add(data)
    await db.commit()
    await db.refresh(data)
    await db.close()
    return data


async def forgot_password(db: AsyncSession,
                          telephone: str,
                          password: str):
    user = await db.execute(select(User).where(User.telephone == telephone))
    user = user.scalars().first()
    if user:
        check_verify_password = verify_password(password, user.hashed_password)
        if check_verify_password:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                detail="The password is the same as the old one")
        else:
            new_password = get_password_hash(password)
            user.hashed_password = new_password
            await db.commit()
            return True
    else:
        return None

