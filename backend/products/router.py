from typing import Dict
from auth.settings import manager
from fastapi import APIRouter, status, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_async_session
from products.crud import (get_product_list,
                           get_title_product,
                           get_format_table,
                           get_paper_table,
                           get_bas_table,
                           get_tco_table,
                           get_var_table,
                           get_nco_table)


product_router = APIRouter()


@product_router.get("/productsList/",
                    response_model=Dict,
                    status_code=status.HTTP_200_OK)
async def productsList(db: AsyncSession = Depends(get_async_session)):

    data = await get_product_list(db=db)
    if data is None:
        raise HTTPException(status_code=404, detail="Products not found")
    return {"products": data}


@product_router.get("/productInfo/",
                    response_model=Dict,
                    status_code=status.HTTP_200_OK)
async def productInfo(id:int,
                      db: AsyncSession = Depends(get_async_session)):
    title_product = await get_title_product(db=db, id=id)
    format_data = await get_format_table(db=db, id=id)
    paper_data = await get_paper_table(db=db, id=id)
    bas_data = await get_bas_table(db=db, id=id)
    tco_data = await get_tco_table(db=db, id=id)
    var_data = await get_var_table(db=db, id=id)
    nco_data = await get_nco_table(db=db, id=id)
    if title_product is None:
        raise HTTPException(status_code=404, detail="Products not found")

    return {
        "product": {
            "id": id,
            "title": title_product,
            "calculatorSettings": [
                {
                    "id": "for",
                    "title": "Формат"
                },
                {
                    "id": "pap",
                    "title": "Тип бумаги"
                },
                {
                    "id": "bas",
                    "title": "Основа страниц"
                },
                {
                    "id": "tco",
                    "title": "Тип обложки"
                },
                {
                    "id": "var",
                    "title": "Вариант обложки"
                },
                {
                    "id": "cnt",
                    "title": "Количество разворотов"
                }
            ],
            "for": format_data,
            "pap": paper_data,
            "bas": bas_data,
            "tco": tco_data,
            "var": var_data,
            "nco": nco_data
        }

    }
