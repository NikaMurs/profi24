from typing import Optional

from fastapi import File, UploadFile
from pydantic import BaseModel, Field


class CreateProductResponses(BaseModel):
    """Ответ на создание полей продукта"""
    id: int


class DeleteProductResponses(BaseModel):
    """Ответ на удаление продукта"""
    message: str = Field(examples=["Product deleted successfully"])


class UpdateProductResponses(BaseModel):
    """Ответ на изменение полей продукта"""
    message: str = Field(examples=["Product updated successfully"])


class UpdateUserResponses(BaseModel):
    """Ответ на изменение полей пользователя"""
    message: str = Field(examples=["User updated successfully"])


class Product(BaseModel):
    """Поля продукта"""
    title: str
    shortTitle: str
    text1: Optional[str] = None
    text2: Optional[str] = None
    text3: Optional[str] = None
    notes: Optional[str] = None


class ProductView(BaseModel):
    id: int
    title: str
    shortTitle: str
    text1: Optional[str] = None
    text2: Optional[str] = None
    text3: Optional[str] = None
    notes: Optional[str] = None


class EditProduct(BaseModel):
    """Поля для изменения продукта"""
    isActive: Optional[bool] = False
    title: Optional[str] = None
    shortTitle: Optional[str] = None
    text1: Optional[str] = None
    text2: Optional[str] = None
    text3: Optional[str] = None
    notes: Optional[str] = None

