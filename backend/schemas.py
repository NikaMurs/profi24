from pydantic import BaseModel, EmailStr


class User(BaseModel):
    """Поля пользователя"""
    id: int
    first_name: str
    name: str
    second_name: str
    hashed_password: str
    telephone: str
    email: str
    country: str
    city: str
    is_active: bool
    is_superuser: bool
    is_verified: bool


class UserCreate(BaseModel):
    """Шаблон для регистрации пользователя"""
    first_name: str
    name: str
    second_name: str
    telephone: str
    email: EmailStr
    hashed_password: str


class Message(BaseModel):
    """Вывод сообщения об ошибке/успехе"""
    message: str


class UserInfo(BaseModel):
    """Запрашивается при старте приложения"""
    id: int
    first_name: str
    name: str
    second_name: str
    money: float
    bonus: int
    bonusStatus: str


class UserFullInfo(BaseModel):
    """Дополнительная информация о пользователе"""
    country: str
    city: str
    street: str
    profession: str
    countBook: int
    site: str
    vk: str
    telegram: str
    whatsapp: str