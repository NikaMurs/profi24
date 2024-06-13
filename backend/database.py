from typing import AsyncGenerator

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase
from config import SERVER, USER, PASSWORD, DATABASE
from models import *


DATABASE_URL = f"postgresql+asyncpg://{USER}:{PASSWORD}@{SERVER}/{DATABASE}"


class Base(DeclarativeBase):
    pass


engine = create_async_engine(
    DATABASE_URL,
    pool_size=10,
    max_overflow=20,
    pool_recycle=3600,
    pool_pre_ping=True,
    echo=True
)

async_session_maker = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    session = None
    try:
        session = async_session_maker()
        async with session as session:
            yield session
    finally:
        if session is not None:
            await session.close()


async def test_connection(session: AsyncSession):
    """
    Первый запрос в базу

    Возобновляет коннект с базой

    """
    try:
        await session.execute(select(1))
    except RuntimeError as e:
        print("Error:", e)
