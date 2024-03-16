from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase
from config import TEST_MYSQL_SERVER, TEST_USER, TEST_PASSWORD, TEST_MYSQL_DATABASE


DATABASE_URL = f"mysql+aiomysql://{TEST_USER}:{TEST_PASSWORD}@{TEST_MYSQL_SERVER}/{TEST_MYSQL_DATABASE}"


class Base(DeclarativeBase):
    pass


engine = create_async_engine(DATABASE_URL)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session

