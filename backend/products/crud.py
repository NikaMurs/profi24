from typing import List, Dict
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from models import Pro, Var01, Format, Pap, Bas, Tco, Nco, User


async def get_product_list(db: AsyncSession):
    data = await db.execute(select(Pro).filter(Pro.isActive == 1))
    data = data.scalars().all()

    if not data:
        return None

    product_dicts = []
    for product in data:
        product_dict = {
            "id": product.id,
            "title": product.title,
            "img": product.img
        }
        product_dicts.append(product_dict)

    return product_dicts


async def get_title_product(db: AsyncSession,
                            id: int) -> str:
    data = await db.execute(select(Pro.title).where(Pro.id == id))
    data = data.scalars().first()
    return data


async def get_var_table(db: AsyncSession,
                        id: int) -> List[Dict]:
    query = (
        select(Var01.isActive,
               Var01.id,
               Var01.title,
               Var01.shortTitle,
               Var01.img,
               Var01.text1,
               Var01.text2,
               Var01.text3,
               Var01.notes)
        .join(Pro)
        .where(Pro.id == id).where(Var01.isActive == 1)
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
                           id: int) -> List[Dict]:
    query = (
        select(Format.isActive,
               Format.id,
               Format.title,
               Format.img,
               Format.price,
               Format.basePrice,
               Format.guideLinesJpeg,
               Format.guideLinespsd,
               Format.guideLineslndd,
               Format.text1,
               Format.text2,
               Format.text3,
               Format.size,
               Format.notes)
        .join(Pro)
        .where(Pro.id == id).where(Format.isActive == 1)
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
                          id: int) -> List[Dict]:
    query = (
        select(Pap.isActive,
               Pap.id,
               Pap.title,
               Pap.shortTitle,
               Pap.img,
               Pap.width,
               Pap.text1,
               Pap.text2,
               Pap.text3,
               Pap.notes)
        .join(Pro)
        .where(Pro.id == id).where(Pap.isActive == 1)
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
                        id: int) -> List[Dict]:
    query = (
        select(Bas.isActive,
               Bas.id,
               Bas.title,
               Bas.img,
               Bas.width,
               Bas.weight,
               Bas.price,
               Bas.maxCount,
               Bas.text1,
               Bas.text2,
               Bas.text3,
               Bas.notes)
        .join(Pro)
        .where(Pro.id == id).where(Bas.isActive == 1)
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
                        id: int) -> List[Dict]:
    query = (
        select(Tco.isActive,
               Tco.id,
               Tco.title,
               Tco.shortTitle,
               Tco.indicatorFormat,
               Tco.multiplier,
               Tco.width,
               Tco.img,
               Tco.text1,
               Tco.text2,
               Tco.text3,
               Tco.notes)
        .join(Pro)
        .where(Pro.id == id).where(Tco.isActive == 1)
    )

    result = await db.execute(query)
    data = result.fetchall()

    column_names = result.keys()

    formatted_data = []
    for row in data:
        formatted_row = dict(zip(column_names, row))
        formatted_data.append(formatted_row)

    return formatted_data


async def get_nco_table(db: AsyncSession,
                        id: int) -> List[Dict]:
    query = (
        select(Nco.id,
               Nco.format,
               Nco.width,
               Nco.size,
               Nco.weight,
               Nco.guides_jpeg,
               Nco.guides_psd,
               Nco.guides_lndd)
        .join(Pro)
        .where(Pro.id == id).where(Nco.isActive == 1)
    )

    result = await db.execute(query)
    data = result.fetchall()

    column_names = result.keys()

    formatted_data = []
    for row in data:
        formatted_row = dict(zip(column_names, row))
        formatted_data.append(formatted_row)

    return formatted_data

