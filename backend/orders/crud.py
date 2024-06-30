from typing import Dict

from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from models import Order
from orders.schemas import CreateOrder


async def create_new_order(db: AsyncSession,
                           info: CreateOrder):
    try:
        data_convert = {
            'uuid': info.uuid,
            'id': info.id,
            'status': info.status,
            'ready_persent': info.readyPersent,
            'user_id': info.userId,
            'is_master': info.isMaster,
            'is_slave': info.isSlave,
            'description': info.description,
            'price': info.price,
            'date_start': info.dateStart,
            'date_finished': info.dateFinished,
            'weight': info.weight,
            'track_number': info.trackNumber,
            'comment': info.comment,
            'name': info.name
        }

        data = Order(
            uuid=data_convert['uuid'],
            id=data_convert['id'],
            status=data_convert['status'],
            ready_persent=data_convert['ready_persent'],
            user_id=data_convert['user_id'],
            is_master=data_convert['is_master'],
            is_slave=data_convert['is_slave'],
            description=data_convert['description'],
            price=data_convert['price'],
            date_start=data_convert['date_start'],
            date_finished=data_convert['date_finished'],
            weight=data_convert['weight'],
            track_number=data_convert['track_number'],
            comment=data_convert['comment'],
            name=data_convert['name']
        )

        if data:
            db.add(data)
            await db.commit()
            await db.refresh(data)
            await db.close()

            return data
        else:
            raise ValueError("Null params new order")

    except Exception as error:
        await db.rollback()
        raise HTTPException(status_code=400, detail=str(error))
    finally:
        await db.close()
