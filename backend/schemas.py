from pydantic import BaseModel


class User(BaseModel):
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