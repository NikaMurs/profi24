from fastapi import FastAPI
from auth.router import auth_router
from api.router import user_router

app = FastAPI(
    title="Заказ печати",
    description="*EndPoint с замочком - только для авторизировнных пользователей*"
)

app.include_router(auth_router, tags=["auth"])
app.include_router(user_router, tags=["user"])
