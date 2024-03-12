from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import (Integer,
                        String,
                        MetaData,
                        TIMESTAMP,
                        func,
                        ForeignKey)

metadata = MetaData()

Base = declarative_base(metadata=metadata)


# TODO Разобраться с обязательными и необязательными полями
class User(SQLAlchemyBaseUserTable[int], Base):
    __tablename__ = 'user'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    surname: Mapped[str] = mapped_column(String(length=50), nullable=False)
    name: Mapped[str] = mapped_column(String(length=50), nullable=False)
    second_name: Mapped[str] = mapped_column(String(length=50), nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(length=100), nullable=False)
    telephone: Mapped[str] = mapped_column(String(length=11), nullable=False)
    email: Mapped[str] = mapped_column(String(length=100), nullable=False)
    country: Mapped[str] = mapped_column(String(length=100))
    city: Mapped[str] = mapped_column(String(length=100))
    is_active: bool
    is_superuser: bool
    is_verified: bool

