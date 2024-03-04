from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import (Column,
                        Integer,
                        String,
                        Text,
                        Float,
                        MetaData,
                        TIMESTAMP,
                        Boolean)

metadata = MetaData()

Base = declarative_base(metadata=metadata)


class Bas(SQLAlchemyBaseUserTable[int], Base):
    __tablename__ = 'bas'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    art: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    img1: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img2: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)
    thickness: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    weight: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    price: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    max_count: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    text_1: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text_2: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text_3: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
