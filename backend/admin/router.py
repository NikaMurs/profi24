import shutil

from models import Pro
from fastapi import APIRouter, status, Depends, HTTPException, UploadFile, File
from auth.settings import manager, get_user_info_start, get_admin_user
from typing import Dict, Any, List, Optional

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_async_session, test_connection
from admin.crud import (get_product_list,
                        create_products,
                        get_one_product_from_id,
                        delete_product_from_id,
                        save_photo_in_db,
                        get_var_table,
                        get_format_table,
                        get_paper_table,
                        get_bas_table,
                        get_tco_table,
                        get_nco_table,
                        get_title_product,
                        update_product,
                        delete_product)
from admin.schemas import Product, EditProduct, ProductView

admin_router = APIRouter()


@admin_router.get("/management/adminProductList/",
                  response_model=Dict[str, List[Dict[str, Any]]],
                  status_code=status.HTTP_200_OK)
async def get_product_list_info(user=Depends(get_admin_user),
                                db: AsyncSession = Depends(get_async_session)):
    """
    <b>(Только для админа)</b>

    Просмотр списка продуктов:

    - **isActive**: состояние продукта (вкл/выкл)
    - **title**: Описание продукта
    - **shortTitle**: Краткое описание продукта
    - **id**: № продукта
    - **img**: Ссылка на изображение продукта
    - **text1**: Текст описания продукта
    - **text2**: Текст описания продукта
    - **text3**: Текст описания продукта
    - **notes**: Комментарий
    """
    products = await get_product_list(db=db)
    if products is None:
        raise HTTPException(status_code=404, detail="Products not found")

    return {"products": products}


@admin_router.post('/upload_photo/',
                    status_code=status.HTTP_200_OK)
async def save_file_for_product(product_id: int,
                                my_upload_file: UploadFile = File(...),
                                user=Depends(get_admin_user),
                                db: AsyncSession = Depends(get_async_session)):

    data = await save_photo_in_db(db=db, product_id=product_id, file=my_upload_file)

    return data


# @admin_router.post("/management/",
#                    response_model=ProductView,
#                    status_code=status.HTTP_201_CREATED)
# async def create_product(product: Product,
#                          user=Depends(get_admin_user),
#                          db: AsyncSession = Depends(get_async_session)):
#     # """
#     # <b>(Только для админа)</b>
#     #
#     # Создание нового продукта:
#     #
#     # - **isActive**: подставиться автоматически в <b>false</b>
#     # - **title**: string 100
#     # - **shortTitle**: string 50
#     # - **id**: подставиться автоматически в <b>int значение (начиная с 1)</b>
#     # - **img**: string 600 (путь до фото)
#     # - **text1**: text
#     # - **text2**: text
#     # - **text3**: text
#     # - **notes**: text
#     # """
#
#     data = await create_products(db=db,
#                                  product=product)
#     return data

@admin_router.post("/management/",
                   response_model=Dict,
                   status_code=status.HTTP_201_CREATED)
async def create_product(info: Dict,
                         user=Depends(get_admin_user),
                         db: AsyncSession = Depends(get_async_session)):

    data = await create_products(db=db, info=info)

    return {"id": data}


@admin_router.patch("/management/",
                    response_model=Dict,
                    status_code=status.HTTP_200_OK)
async def update_product_route(info: Dict,
                               user=Depends(get_admin_user),
                               db: AsyncSession = Depends(get_async_session)):
    await update_product(db, info)
    return {"message": "Product updated successfully"}


@admin_router.delete("/management/")
async def delete_product_route(info: Dict,
                               user=Depends(get_admin_user),
                               db: AsyncSession = Depends(get_async_session)):
    await delete_product(db, info)
    return {"message": "Product deleted successfully"}


# @admin_router.patch("/management/",
#                     response_model=EditProduct,
#                     status_code=status.HTTP_200_OK)
# async def edit_product(product_id: int,
#                        info: EditProduct,
#                        user=Depends(get_admin_user),
#                        db: AsyncSession = Depends(get_async_session)):
#     """
#     <b>(Только для админа)</b>
#
#     Редактирование полей продукта по его <b>id</b>:
#     - **id**: <b>нельзя редактировать</b>
#     - **Остальные поля**: указаны в Example Value
#     """
#     product = await get_one_product_from_id(db=db, product_id=product_id)
#
#     if product is None:
#         raise HTTPException(status_code=404, detail="Product not found")
#
#     for field, value in info.dict(exclude_unset=True).items():
#         setattr(product, field, value)
#
#     await db.commit()
#     return product


# @admin_router.delete("/management/",
#                     response_model=Dict,
#                     status_code=status.HTTP_200_OK)
# async def delete_product(product_id: int,
#                          user=Depends(get_admin_user),
#                          db: AsyncSession = Depends(get_async_session)):
#
#     data = await delete_product_from_id(db=db, product_id=product_id)
#     if data is None:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail='Product not found')
#     return data


@admin_router.get("/management/adminProductInfo/",
                  response_model=Dict,
                  status_code=status.HTTP_200_OK)
async def productInfo(id: int,
                      user=Depends(get_admin_user),
                      db: AsyncSession = Depends(get_async_session)):

    title_product = await get_title_product(db=db, product_id=id)
    format_data = await get_format_table(db=db, product_id=id)
    paper_data = await get_paper_table(db=db, product_id=id)
    bas_data = await get_bas_table(db=db, product_id=id)
    tco_data = await get_tco_table(db=db, product_id=id)
    var_data = await get_var_table(db=db, product_id=id)
    nco_data = await get_nco_table(db=db, product_id=id)

    return {
        "title": title_product,
        "for": format_data,
        "pap": paper_data,
        "bas": bas_data,
        "tco": tco_data,
        "var": var_data,
        "nco": nco_data
    }
