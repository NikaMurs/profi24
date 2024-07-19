from typing import Annotated, Dict

from fastapi import APIRouter, status, Depends, UploadFile, File, Body, Form, Query
from auth.settings import manager
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_async_session
from orders.schemas import CreateOrder, OrderResponse, OrderPhoto
from orders.crud import create_new_order, save_photo_order
from pydantic import Field

order_router = APIRouter()


@order_router.post("/",
                   response_model=OrderResponse,
                   status_code=status.HTTP_201_CREATED)
async def create_order(info: CreateOrder,
                       user=Depends(manager),
                       db: AsyncSession = Depends(get_async_session)):

    new_product = await create_new_order(db=db, info=info)
    return new_product


@order_router.post('/upload',
                   status_code=status.HTTP_200_OK)
async def save_photo_for_order(orderUuid: Annotated[str, Query(example="ccf93c04-64b4-400c-8998-4f4da4dca383")],
                               userId: Annotated[int, Query(example=3)],
                               img: UploadFile = File(...),
                               user=Depends(manager),
                               db: AsyncSession = Depends(get_async_session)):
    result = await save_photo_order(db=db, img=img, orderUuid=orderUuid, userId=userId)
    return result
