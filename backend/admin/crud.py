import datetime
import os
import shutil
from typing import List, Dict

from fastapi import UploadFile, File
from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from models import Pro, Var01, Format, Pap, Bas, Tco, Nco


async def get_product_list(db: AsyncSession):
    data = select(Pro)
    result = await db.execute(data)
    products = result.scalars().all()

    if not products:
        return None

    product_dicts = []
    for product in products:
        product_dict = {
            "isActive": product.isActive,
            "title": product.title,
            "shortTitle": product.shortTitle,
            "id": product.id,
            "img": product.img,
            "text1": product.text1,
            "text2": product.text2,
            "text3": product.text3,
            "notes": product.notes
        }
        product_dicts.append(product_dict)

    return product_dicts


async def save_photo_in_db(db: AsyncSession,
                           product_id: int,
                           file: UploadFile = File(...)):

    filename, ext = os.path.splitext(file.filename)
    time = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    new_filename = f"{filename}_{str(time)}{ext}"
    path = f'media/{new_filename}'

    with open(path, 'wb+') as buffer:
        shutil.copyfileobj(file.file, buffer)

    product = await db.execute(select(Pro).filter(Pro.id == product_id))
    product_data = product.scalars().first()

    if product_data:
        product_data.img = 'http://5.35.84.51:8080/' + path
        await db.commit()
        await db.close()
        return product_data
    else:
        return None


async def create_products(db: AsyncSession,
                          product):

    data = Pro(
        title=product.title,
        shortTitle=product.shortTitle,
        text1=product.text1,
        text2=product.text2,
        text3=product.text3,
        notes=product.notes
    )

    db.add(data)
    await db.commit()
    await db.refresh(data)
    await db.close()
    return data


async def get_one_product_from_id(db: AsyncSession,
                                  product_id: int):
    product = await db.execute(select(Pro).where(Pro.id == product_id))
    product = product.scalars().first()

    if product:
        return product
    else:
        return None


async def delete_product_from_id(db: AsyncSession,
                                 product_id: int):
    data = await get_one_product_from_id(db=db, product_id=product_id)
    if data:
        await db.delete(data)
        await db.commit()
        return {"massage": "Product deleted successfully"}
    else:
        return None


async def get_var_table(db: AsyncSession,
                           product_id: int) -> List[Dict]:
    query = (
        select(Var01.isActive,
               Var01.id,
               Var01.name,
               Var01.shortName,
               Var01.img,
               Var01.text1,
               Var01.text2,
               Var01.text3,
               Var01.notes)
        .join(Pro)
        .where(Pro.id == product_id)
    )

    result = await db.execute(query)
    data = result.fetchall()

    column_names = result.keys()

    formatted_data = []
    for row in data:
        formatted_row = dict(zip(column_names, row))
        formatted_data.append(formatted_row)

    return formatted_data


async def get_format_table(db: AsyncSession,
                           product_id: int) -> List[Dict]:
    query = (
        select(Format.isActive,
               Format.id,
               Format.name,
               Format.img,
               Format.paper_price,
               Format.base_price,
               Format.jpeg,
               Format.psd,
               Format.psd,
               Format.text1,
               Format.text2,
               Format.text3,
               Format.target_size,
               Format.notes)
        .join(Pro)
        .where(Pro.id == product_id)
    )

    result = await db.execute(query)
    data = result.fetchall()

    column_names = result.keys()

    formatted_data = []
    for row in data:
        formatted_row = dict(zip(column_names, row))
        formatted_data.append(formatted_row)

    return formatted_data


async def get_paper_table(db: AsyncSession,
                          product_id: int) -> List[Dict]:
    query = (
        select(Pap.isActive,
               Pap.id,
               Pap.name,
               Pap.shortName,
               Pap.img,
               Pap.thickness,
               Pap.text1,
               Pap.text2,
               Pap.text3,
               Pap.notes)
        .join(Pro)
        .where(Pro.id == product_id)
    )

    result = await db.execute(query)
    data = result.fetchall()

    column_names = result.keys()

    formatted_data = []
    for row in data:
        formatted_row = dict(zip(column_names, row))
        formatted_data.append(formatted_row)

    return formatted_data


async def get_bas_table(db: AsyncSession,
                        product_id: int) -> List[Dict]:
    query = (
        select(Bas.isActive,
               Bas.id,
               Bas.name,
               Bas.img,
               Bas.thickness,
               Bas.weight,
               Bas.price,
               Bas.max_count,
               Bas.text1,
               Bas.text2,
               Bas.text3,
               Bas.notes)
        .join(Pro)
        .where(Pro.id == product_id)
    )

    result = await db.execute(query)
    data = result.fetchall()

    column_names = result.keys()

    formatted_data = []
    for row in data:
        formatted_row = dict(zip(column_names, row))
        formatted_data.append(formatted_row)

    return formatted_data


async def get_tco_table(db: AsyncSession,
                        product_id: int) -> List[Dict]:
    query = (
        select(Tco.isActive,
               Tco.id,
               Tco.name,
               Tco.shortName,
               Tco.indicator,
               Tco.factor,
               Tco.img,
               Tco.text1,
               Tco.text2,
               Tco.text3,
               Tco.notes)
        .join(Pro)
        .where(Pro.id == product_id)
    )

    result = await db.execute(query)
    data = result.fetchall()

    column_names = result.keys()

    formatted_data = []
    for row in data:
        formatted_row = dict(zip(column_names, row))
        formatted_data.append(formatted_row)

    return formatted_data


# Todo добавить isActive
async def get_nco_table(db: AsyncSession,
                        product_id: int) -> List[Dict]:
    query = (
        select(Nco.id,
               Nco.format,
               Nco.thickness_block,
               Nco.target_size,
               Nco.weight,
               Nco.guides_jpeg,
               Nco.guides_psd,
               Nco.guides_lndd)
        .join(Pro)
        .where(Pro.id == product_id)
    )

    result = await db.execute(query)
    data = result.fetchall()

    column_names = result.keys()

    formatted_data = []
    for row in data:
        formatted_row = dict(zip(column_names, row))
        formatted_data.append(formatted_row)

    return formatted_data