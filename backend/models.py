from fastapi_users_db_sqlalchemy import SQLAlchemyBaseUserTable
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import (Integer,
                        String,
                        MetaData,
                        TIMESTAMP)

metadata = MetaData()

Base = declarative_base(metadata=metadata)


class Bas(Base):
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


class Bonus(Base):
    __tablename__ = 'bonus'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    date: Mapped[TIMESTAMP] = mapped_column(TIMESTAMP, nullable=False, default=False)  # дата (формат ?)
    tim: Mapped[TIMESTAMP] = mapped_column(TIMESTAMP, nullable=False, default=False)  # время (формат ?)
    pls: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    mns: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    method: Mapped[str] = mapped_column(String(3, collation='utf8_general_ci'), nullable=False, default=False)
    user_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    pay_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    note_pay: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note_admin: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


"Продукты"
class Dop(Base):
    __tablename__ = 'dop'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    art: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    shorts_name: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img1: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img2: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)
    price: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    text1: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text2: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text3: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


class Forr(Base):
    __tablename__ = 'forr'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    art: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    img1: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img2: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)
    price_paper: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    bp: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    filling: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)
    text1: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text2: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text3: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    size: Mapped[str] = mapped_column(String(10, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


class Foto(Base):
    __tablename__ = 'foto'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    user_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)


class Fotobooks(Base):
    __tablename__ = 'fotobooks'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    count_turns: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    order_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)


class Nco(Base):
    __tablename__ = 'nco'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    art: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    format: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    thickness: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    reversal: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    weight: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    rulers: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)


class Orders(Base):
    __tablename__ = 'orders'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    user_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    forr: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    pap: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    bas: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    tco: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    var01: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    c_raz: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    c_b: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    n_order: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    price: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    date: Mapped[TIMESTAMP] = mapped_column(TIMESTAMP, nullable=False, default=False)  # дата (формат ?)
    ves: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    nomer: Mapped[str] = mapped_column(String(30, collation='utf8_general_ci'), nullable=False, default=False)
    additionally: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


class Order_plus(Base):
    __tablename__ = 'orders'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    order_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    etap_1: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    etap_2: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    etap_3: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    etap_4: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    etap_5: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    etap_6: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    etap_7: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    etap_8: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    readiness: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    admin_note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


class Order_text(Base):
    __tablename__ = 'order_text'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    order_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    t1: Mapped[str] = mapped_column(String(4, collation='utf8_general_ci'), nullable=False, default=False)
    t2: Mapped[str] = mapped_column(String(4, collation='utf8_general_ci'), nullable=False, default=False)
    t3: Mapped[str] = mapped_column(String(4, collation='utf8_general_ci'), nullable=False, default=False)
    t4: Mapped[str] = mapped_column(String(4, collation='utf8_general_ci'), nullable=False, default=False)
    t5: Mapped[str] = mapped_column(String(4, collation='utf8_general_ci'), nullable=False, default=False)
    t6: Mapped[str] = mapped_column(String(4, collation='utf8_general_ci'), nullable=False, default=False)
    t7: Mapped[str] = mapped_column(String(4, collation='utf8_general_ci'), nullable=False, default=False)
    t8: Mapped[str] = mapped_column(String(4, collation='utf8_general_ci'), nullable=False, default=False)


class Pap(Base):
    __tablename__ = 'pap'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    art: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    shorts_name: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img1: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img2: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)
    thickness: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    text_1: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text_2: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text_3: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)

# Придется переписывать логику для платежей (в зависимости от стороненого API)
class Pay_log(Base):
    __tablename__ = 'pay_log'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    dat: Mapped[TIMESTAMP] = mapped_column(TIMESTAMP, nullable=False, default=False) # дата (формат ?)
    tim: Mapped[TIMESTAMP] = mapped_column(TIMESTAMP, nullable=False, default=False) # время (формат ?)
    pls: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    mns: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    method: Mapped[str] = mapped_column(String(3, collation='utf8_general_ci'), nullable=False, default=False)
    user_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    bank_inf: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note_pay: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note_admin: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    scrin: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


class Pf(Base):
    __tablename__ = 'pf'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    order_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    number_book: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    place: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    foto_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)


class Pco(Base):
    __tablename__ = 'pco'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    shorts_name: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    art: Mapped[str] = mapped_column(String(3, collation='utf8_general_ci'), nullable=False, default=False)
    img1: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    text_1: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text_2: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text_3: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


class Tco(Base):
    __tablename__ = 'tco'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    art: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    shorts_name: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    accessibility: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    lover: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    thickness: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    img1: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)
    img2: Mapped[str] = mapped_column(String(20, collation='utf8_general_ci'), nullable=False, default=False)
    text1: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text2: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text3: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


class User(SQLAlchemyBaseUserTable[int], Base):
    __tablename__ = 'user'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    tel: Mapped[str] = mapped_column(String(12, collation='utf8_general_ci'), nullable=False, default=False)
    firstname: Mapped[str] = mapped_column(String(25, collation='utf8_general_ci'), nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    surname: Mapped[str] = mapped_column(String(25, collation='utf8_general_ci'), nullable=False, default=False)
    country: Mapped[str] = mapped_column(String(25, collation='utf8_general_ci'), nullable=False, default=False)
    city: Mapped[str] = mapped_column(String(25, collation='utf8_general_ci'), nullable=False, default=False)
    mail: Mapped[str] = mapped_column(String(25, collation='utf8_general_ci'), nullable=False, default=False)
    site: Mapped[str] = mapped_column(String(25, collation='utf8_general_ci'), nullable=False, default=False)
    pasw: Mapped[str] = mapped_column(String(30, collation='utf8_general_ci'), nullable=False, default=False)
    profession: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)
    pvk: Mapped[str] = mapped_column(String(30, collation='utf8_general_ci'), nullable=False, default=False)
    count_book: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[str] = mapped_column(String(30, collation='utf8_general_ci'), nullable=False, default=False)
    balance: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    balance_plus: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    balance_minus: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    bonus: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    bonus_pluse: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    bonus_minus: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    telegram: Mapped[str] = mapped_column(String(30, collation='utf8_general_ci'), nullable=False, default=False)
    watsapp: Mapped[str] = mapped_column(String(30, collation='utf8_general_ci'), nullable=False, default=False)
    comeback: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    text_1: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    text_2: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    text_3: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    text_4: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    text_5: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    text_6: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    text_7: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)


class User_pay(Base):
    __tablename__ = 'user_pay'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    invoice_id: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    sum: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    user_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)


class Var01(Base):
    __tablename__ = 'var01'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    art: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    short_name: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img1: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img2: Mapped[str] = mapped_column(String(200, collation='utf8_general_ci'), nullable=False, default=False)
    text1: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text2: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text3: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)


class Var02(Base):
    __tablename__ = 'var02'
    __table_args__ = {'extend_existing': True}

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, nullable=False, default=False)
    product_id: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    status: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    art: Mapped[int] = mapped_column(Integer, nullable=False, default=False)
    name: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    short_name: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    img: Mapped[str] = mapped_column(String(50, collation='utf8_general_ci'), nullable=False, default=False)
    text1: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text2: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    text3: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)
    note: Mapped[str] = mapped_column(String(100, collation='utf8_general_ci'), nullable=False, default=False)