from fastapi import APIRouter, status, Depends, HTTPException
from typing import Dict
from auth.settings import manager
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_async_session
from orders.schemas import CreateOrder, OrderResponse
from orders.crud import create_new_order


order_router = APIRouter()


@order_router.post("/",
                   response_model=OrderResponse,
                   status_code=status.HTTP_201_CREATED)
async def create_order(info: CreateOrder,
                       user=Depends(manager),
                       db: AsyncSession = Depends(get_async_session)):

    new_product = await create_new_order(db=db, info=info)
    return new_product

