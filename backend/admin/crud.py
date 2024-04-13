from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from models import Pro
from admin.schemas import Product


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


async def create_products(db: AsyncSession,
                          product: Product):
    data = Pro(
        title=product.title,
        shortTitle=product.shortTitle,
        img=product.img,
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
