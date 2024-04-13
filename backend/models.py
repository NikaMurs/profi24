from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import (Integer,
                        String,
                        MetaData,
                        Boolean,
                        Float,
                        Enum,
                        Text)

metadata = MetaData()

Base = declarative_base(metadata=metadata)


class User(Base):
    __tablename__ = 'user'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    first_name: Mapped[str] = mapped_column(String(length=50), nullable=True)
    name: Mapped[str] = mapped_column(String(length=50), nullable=True)
    second_name: Mapped[str] = mapped_column(String(length=50), nullable=True)
    hashed_password: Mapped[str] = mapped_column(String(length=100), nullable=False)
    telephone: Mapped[str] = mapped_column(String(length=11), nullable=False)
    email: Mapped[str] = mapped_column(String(length=100), nullable=True)
    country: Mapped[str] = mapped_column(String(length=100), nullable=True, default="")
    city: Mapped[str] = mapped_column(String(length=100), nullable=True, default="")
    street: Mapped[str] = mapped_column(String(length=200), default="")
    profession: Mapped[str] = mapped_column(String(length=100), default="")
    countBook: Mapped[int] = mapped_column(Integer, default=0)
    site: Mapped[str] = mapped_column(String(length=900), default="")
    vk: Mapped[str] = mapped_column(String(200), default="")
    telegram: Mapped[str] = mapped_column(String(200), default="")
    whatsapp: Mapped[str] = mapped_column(String(200), default="")
    money: Mapped[float] = mapped_column(Float, default=0)
    bonus: Mapped[int] = mapped_column(Integer, default=0)
    bonusStatus: Mapped[str] = mapped_column(Enum("Base", "Bronze", "Silver", "Gold"), default="Base")
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=True)
    is_superuser: Mapped[bool] = mapped_column(Boolean, nullable=True)
    is_verified: Mapped[bool] = mapped_column(Boolean, nullable=True)


class Pro(Base):
    """Продукты"""
    __tablename__ = 'pro'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    isActive: Mapped[bool] = mapped_column(Boolean, nullable=False, default=0)
    title: Mapped[str] = mapped_column(String(100), nullable=False, default="")
    shortTitle: Mapped[str] = mapped_column(String(50), nullable=False, default="")
    img: Mapped[str] = mapped_column(String(600), nullable=False, default="")
    text1: Mapped[str] = mapped_column(Text, nullable=True)
    text2: Mapped[str] = mapped_column(Text, nullable=True)
    text3: Mapped[str] = mapped_column(Text, nullable=True)
    notes: Mapped[str] = mapped_column(Text, nullable=True)

# class For(Base):
#     """Формат"""
#     __tablename__ = 'for'
#     __table_args__ = {'extend_existing': True}
#
#
# class Pap(Base):
#     """Бумага"""
#     __tablename__ = 'pap'
#     __table_args__ = {'extend_existing': True}
#
#
# class Bas(Base):
#     """Основа стариц"""
#     __tablename__ = 'bas'
#     __table_args__ = {'extend_existing': True}
#
#
# class Tco(Base):
#     """Тип обложки"""
#     __tablename__ = 'tco'
#     __table_args__ = {'extend_existing': True}
#
#
# class Var01(Base):
#     """Варианты обложки"""
#     __tablename__ = 'var01'
#     __table_args__ = {'extend_existing': True}
#
#
# class Nco(Base):
#     """Направляющие для обложки"""
#     __tablename__ = 'nco'
#     __table_args__ = {'extend_existing': True}