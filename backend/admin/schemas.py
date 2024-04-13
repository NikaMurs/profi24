from typing import Optional
from pydantic import BaseModel


class Product(BaseModel):
    """Поля продукта"""
    title: str
    shortTitle: str
    img: str
    text1: Optional[str] = None
    text2: Optional[str] = None
    text3: Optional[str] = None
    notes: Optional[str] = None


class EditProduct(BaseModel):
    """Поля для изменения продукта"""
    isActive: Optional[bool] = False
    title: Optional[str] = None
    shortTitle: Optional[str] = None
    img: Optional[str] = None
    text1: Optional[str] = None
    text2: Optional[str] = None
    text3: Optional[str] = None
    notes: Optional[str] = None

