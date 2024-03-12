from fastapi_users import schemas
from fastapi_users.schemas import PYDANTIC_V2
from pydantic import EmailStr, ConfigDict
from typing_extensions import Optional


class UserRead(schemas.BaseUser[int]):
    id: int
    email: str
    surname: str
    name: str
    second_name: str
    telephone: str
    country: str
    city: str
    is_active: bool = True
    is_superuser: bool = False
    is_verified: bool = False

    if PYDANTIC_V2:  # pragma: no cover
        model_config = ConfigDict(from_attributes=True)  # type: ignore
    else:  # pragma: no cover

        class Config:
            orm_mode = True


class UserCreate(schemas.BaseUserCreate):
    surname: str
    name: str
    second_name: str
    telephone: str
    country: str
    city: str
    is_active: Optional[bool] = False
    is_superuser: Optional[bool] = False
    is_verified: Optional[bool] = False


class UserUpdate(schemas.BaseUserUpdate):
    password: Optional[str] = None
    email: Optional[EmailStr] = None
    is_active: Optional[bool] = None
    is_superuser: Optional[bool] = None
    is_verified: Optional[bool] = None
