from pydantic import BaseModel


class User(BaseModel):
    """Поля пользователя"""
    id: int
    surname: str
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
    telephone: str
    hashed_password: str


class Message(BaseModel):
    """Вывод сообщения об ошибке/успехе"""
    message: str
