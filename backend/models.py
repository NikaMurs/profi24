from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import (Integer,
                        String,
                        MetaData, Boolean)

metadata = MetaData()

Base = declarative_base(metadata=metadata)


class User(Base):
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
    is_active: Mapped[bool] = mapped_column(Boolean)
    is_superuser: Mapped[bool] = mapped_column(Boolean)
    is_verified: Mapped[bool] = mapped_column(Boolean)

