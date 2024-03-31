from datetime import timedelta
from fastapi import HTTPException, status
from fastapi_login import LoginManager
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from auth.password import get_password_hash
from models import User
from schemas import UserCreate, Message, UserInfo
from database import get_async_session, async_session_maker
from config import SECRET

manager = LoginManager(SECRET,
                       "/login",
                       cookie_name='custom-cookie-name',
                       default_expiry=timedelta(hours=72))


@manager.user_loader()
async def get_user(telephone: str):
    async with async_session_maker() as session:
        data = select(User).filter(User.telephone == telephone)
        result = await session.execute(data)
        return result.scalar()


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
        new_password = get_password_hash(password)
        user.hashed_password = new_password
        await db.commit()
        return True
    else:
        return None

