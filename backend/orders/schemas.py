from fastapi import UploadFile, File
from models import generate_uuid
from typing import Optional
from pydantic import BaseModel, Field


class CreateOrder(BaseModel):
    """Поля заказа"""

    uuid: str = Field(examples=[generate_uuid()])
    id: Optional[int] = Field(default=0, examples=[0])
    status: Optional[int] = Field(default=0, examples=[0])
    readyPersent: Optional[int] = Field(default=0, examples=[0])
    userId: int = Field(examples=[1])
    isMaster: Optional[bool] = Field(default=False, examples=[False])
    isSlave: Optional[bool] = Field(default=False, examples=[False])
    description: Optional[str] = Field(default='', examples=[''])
    price: Optional[float] = Field(default=0.0, examples=[0.0])
    dateStart: Optional[float] = Field(default=0.0, examples=[0.0])
    dateFinished: Optional[float] = Field(default=0.0, examples=[0.0])
    weight: Optional[float] = Field(default=0.0, examples=[0.0])
    trackNumber: Optional[str] = Field(default='', examples=[''])
    comment: Optional[str] = Field(default='', examples=[''])
    name: Optional[str] = Field(default='', examples=[''])


class OrderResponse(BaseModel):
    """Поля заказа для ответа"""

    uuid: str
    id: int
    status: int
    readyPersent: int
    userId: int
    isMaster: bool
    isSlave: bool
    description: str
    price: float
    dateStart: float
    dateFinished: float
    weight: float
    trackNumber: str
    comment: str
    name: str

    class Config:
        from_attributes = True


class OrderPhoto(BaseModel):

    userId: int
    orderUuid: str
