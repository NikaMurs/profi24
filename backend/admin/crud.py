import datetime
import os
import shutil
from typing import List, Dict, Any

from fastapi import UploadFile, File, HTTPException
from sqlalchemy import select, func, text, update
from sqlalchemy.ext.asyncio import AsyncSession
from models import Pro, Var01, Format, Pap, Bas, Tco, Nco, User


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
                           tableType: str,
                           id: int,
                           tableName: str,
                           file: UploadFile = File(...)):

    # Настройка файла
    filename, ext = os.path.splitext(file.filename)
    time = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    new_filename = f"{filename}_{str(time)}{ext}"
    path = f'media/{tableType}/{new_filename}'

    # Открытие файла
    with open(path, 'wb+') as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Получение из базы
    model_class = get_table(tableType)

    product = await db.execute(select(model_class).filter(model_class.id == id))
    product_data = product.scalars().first()

    if product_data:
        if hasattr(product_data, tableName):
            setattr(product_data, tableName, 'http://5.35.84.51:8080/' + path)
            await db.commit()
            await db.close()
            return {'url': 'http://5.35.84.51:8080/' + path}
        else:
            raise ValueError(f"Invalid field name: {tableName}")
    else:
        return None


async def create_products(db: AsyncSession,
                          info: Dict) -> int:

    table_type = info["tableType"]
    new_product_info = info["newProduct"]
    new_product = None

    if table_type == "pro":
        new_product = Pro(**new_product_info)
    elif table_type == "for":
        new_product = Format(**new_product_info)
    elif table_type == "pap":
        new_product = Pap(**new_product_info)
    elif table_type == "bas":
        new_product = Bas(**new_product_info)
    elif table_type == "tco":
        new_product = Tco(**new_product_info)
    elif table_type == "var":
        new_product = Var01(**new_product_info)
    elif table_type == "nco":
        new_product = Nco(**new_product_info)

    if new_product:

        db.add(new_product)
        await db.commit()
        await db.refresh(new_product)
        await db.close()

        return new_product.id
    else:
        raise ValueError("Invalid table type: {}".format(table_type))


def get_table(table_type):
    model_class = None

    if table_type == "pro":
        model_class = Pro
    elif table_type == "for":
        model_class = Format
    elif table_type == "pap":
        model_class = Pap
    elif table_type == "bas":
        model_class = Bas
    elif table_type == "tco":
        model_class = Tco
    elif table_type == "var":
        model_class = Var01
    elif table_type == "nco":
        model_class = Nco
    return model_class


async def update_product(db: AsyncSession, info: Dict):
    table_type = info["tableType"]
    product_id = info["id"]
    updated_fields = info["updatedFields"]
    product = None

    model_class = get_table(table_type)

    if model_class:
        product = await db.get(model_class, product_id)

    if product:
        for key, value in updated_fields.items():
            setattr(product, key, value)

        await db.commit()
    else:
        raise ValueError(f"Product with id {product_id} not found")


async def delete_product(db: AsyncSession, info: Dict):
    table_type = info["tableType"]
    product_id = info["id"]

    model_class = get_table(table_type)

    product = await db.get(model_class, product_id)

    if product:
        await db.delete(product)
        await db.commit()
    else:
        raise ValueError(f"Product with id {product_id} not found")


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


async def get_title_product(db: AsyncSession,
                            product_id: int) -> str:
    data = await db.execute(select(Pro.title).where(Pro.id == product_id))
    data = data.scalars().first()
    return data


async def get_var_table(db: AsyncSession,
                           product_id: int) -> List[Dict]:
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
               Format.title,
               Format.img,
               Format.price,
               Format.basePrice,
               Format.guides_jpeg,
               Format.guides_psd,
               Format.guides_indd,
               Format.text1,
               Format.text2,
               Format.text3,
               Format.size,
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
               Pap.title,
               Pap.shortTitle,
               Pap.img,
               Pap.width,
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


async def get_nco_table(db: AsyncSession,
                        product_id: int) -> List[Dict]:
    query = (
        select(Nco.id,
               Nco.isActive,
               Nco.format,
               Nco.width,
               Nco.size,
               Nco.weight,
               Nco.guides_jpeg,
               Nco.guides_psd,
               Nco.guides_indd)
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


async def get_users_list(db: AsyncSession) -> Dict[str, List[Dict[str, Any]]]:
    query = (
        select(User.id,
               User.first_name,
               User.name,
               User.second_name,
               User.telephone,
               User.email,
               User.country,
               User.city,
               User.street,
               User.profession,
               User.countBook,
               User.site,
               User.vk,
               User.telegram,
               User.whatsapp,
               User.money,
               User.bonus,
               User.bonusStatus,
               User.communicationRating,
               User.pickinessRating,
               User.mistakesCount)
    )

    result = await db.execute(query)
    data = result.all()

    keys = result.keys()
    users_list = []

    for row in data:
        user_dict = dict(zip(keys, row))
        fio = ' '.join(filter(None, [user_dict['first_name'], user_dict['name'], user_dict['second_name']]))
        user_dict['fio'] = fio
        user_dict.pop('first_name')
        user_dict.pop('name')
        user_dict.pop('second_name')

        user_data = {
            "id": user_dict["id"],
            "fio": user_dict["fio"],
            "phone": user_dict["telephone"],
            "mail": user_dict["email"],
            "telegram": user_dict["telegram"] or "",
            "whatsapp": user_dict["whatsapp"] or "",
            "country": user_dict["country"] or "",
            "city": user_dict["city"] or "",
            "balance": user_dict["money"],
            "deposited": 0.00,
            "debited": 0.00,
            "balanceBonus": user_dict["bonus"],
            "depositedBonus": 0,
            "debitedBonus": 0,
            "refund": 0.00,
            "bonusStatus": user_dict["bonusStatus"] or "Base",
            "communicationRating": user_dict["communicationRating"],
            "pickinessRating": user_dict["pickinessRating"],
            "mistakesCount": user_dict["mistakesCount"]
        }
        users_list.append(user_data)

    return {"users": users_list}


async def update_users(db: AsyncSession, info: Dict):
    id = info["id"]
    updatedFields = info["updatedFields"]

    user = await db.execute(select(User).filter(User.id == id))
    user = user.scalars().first()

    if user:
        for key, value in updatedFields.items():
            setattr(user, key, value)

        await db.commit()
    else:
        raise ValueError(f"User with id {id} not found")


async def get_info_users(db: AsyncSession,
                         id: int,
                         type_info: str) -> Dict | List:

    user = await db.execute(select(User).filter(User.id == id))
    user = user.scalars().first()
    if user:
        if type_info == "info":
            user_full_info = {
                "country": user.country,
                "city": user.city,
                "street": user.street,
                "profession": user.profession,
                "countBook": user.countBook,
                "site": user.site,
                "vk": user.vk,
                "telegram": user.telegram,
                "whatsapp": user.whatsapp
            }
            return user_full_info
        elif type_info == "orderHistory":
            return []
        elif type_info == "supportHistory":
            return {"supportHistory": user.supportHistory}
        elif type_info == "notebook":
            return {"notebook": user.notebook}
    else:
        raise HTTPException(404, detail="User not found")
