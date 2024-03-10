from datetime import datetime
from pydantic import BaseModel


class BasSchemas(BaseModel):
    id: int
    product_id: int
    status: int
    art: int
    name: str
    img1: str
    img2: str
    thickness: str
    weight: str
    price: int
    max_count: int
    text_1: str
    text_2: str
    text_3: str
    note: str


class BonusSchemas(BaseModel):
    id: int
    date: datetime
    tim: datetime  # поправить время
    pls: int
    mns: int
    method: str
    user_id: int
    pay_id: int
    note_pay: str
    note_admin: str


class DopSchemas(BaseModel):
    id: int
    product_id: int
    status: int
    art: int
    name: str
    shorts_name: str
    img1: str
    img2: str
    price: int
    text1: str
    text2: str
    text3: str
    note: str


class ForrSchemas(BaseModel):
    id: int
    product_id: int
    status: int
    art: int
    name: str
    img1: str
    img2: str
    price_paper: int
    bp: int
    filling: str
    text1: str
    text2: str
    text3: str
    size: str
    note: str


class FotoSchemas(BaseModel):
    id: int
    user_id: int
    name: str


class FotoBooksSchemas(BaseModel):
    id: int
    count_turns: int
    order_id: int


class NcoSchemas(BaseModel):
    id: int
    product_id: int
    status: int
    art: int
    format: str
    thickness: str
    reversal: str
    weight: str
    rulers: str


class OrdersSchemas(BaseModel):
    id: int
    user_id: int
    product_id: int
    forr: int
    pap: int
    bas: int
    tco: int
    var01: int
    c_raz: int
    c_b: int
    status: int
    n_order: str
    note: str
    price: int
    date: datetime
    ves: int
    nomer: str
    additionally: str


class OrderPlusSchemas(BaseModel):
    id: int
    order_id: int
    order: str
    etap_1: int
    etap_2: int
    etap_3: int
    etap_4: int
    etap_5: int
    etap_6: int
    etap_7: int
    etap_8: int
    readiness: int
    admin_note: str


class OrderTextSchemas(BaseModel):
    id: int
    order_id: int
    order: str
    t1: str
    t2: str
    t3: str
    t4: str
    t5: str
    t6: str
    t7: str
    t8: str


class PapSchemas(BaseModel):
    id: int
    product_id: int
    status: int
    art: int
    name: str
    shorts_name: str
    img1: str
    img2: str
    thickness: str
    text_1: str
    text_2: str
    text_3: str
    note: str


class PayLogSchemas(BaseModel):
    id: int
    dat: datetime
    tim: datetime # поправить время
    pls: int
    mns: int
    method: str
    user_id: int
    user: str
    bank_inf: str
    note_pay: str
    note_admin: str
    scrin: str


class PfSchemas(BaseModel):
    id: int
    order_id: int
    order: str
    number_book: int
    place: int
    foto_id: int


class PcoSchemas(BaseModel):
    id: int
    status: int
    name: str
    shorts_name: str
    art: str
    img1: str
    text_1: str
    text_2: str
    text_3: str
    note: str


class TcoSchemas(BaseModel):
    id: int
    product_id: int
    status: int
    art: int
    name: str
    shorts_name: str
    accessibility: str
    lover: int
    thickness: str
    img1: str
    img2: str
    text1: str
    text2: str
    text3: str
    note: str


class UserSchemas(BaseModel):
    id: int
    firstname: str
    name: str
    surname: str
    country: str
    city: str
    site: str
    profession: str
    pvk: str
    count_book: int
    status: str
    balance: int
    balance_plus: int
    balance_minus: int
    bonus: int
    bonus_pluse: int
    bonus_minus: int
    telegram: str
    watsapp: str
    comeback: int
    text_1: str
    text_2: str
    text_3: str
    text_4: str
    text_5: str
    text_6: str
    text_7: str
    # pay_logs
    # pfs
    # orders


class UserPaySchemas(BaseModel):
    id: int
    invoice_id:str
    sum: int
    user_id: int
    user: str
    status: int


class Var01Schemas(BaseModel):
    id: int
    product_id: int
    status: int
    art: int
    name: str
    short_name: str
    img1: str
    img2: str
    text1: str
    text2: str
    text3: str
    note: str


class Var02Schemas(BaseModel):
    id: int
    product_id: int
    status: int
    art: int
    name: str
    short_name: str
    img: str
    text1: str
    text2: str
    text3: str
    note: str