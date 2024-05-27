from fastapi import FastAPI
from auth.router import auth_router
from api.router import user_router
from admin.router import admin_router
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from products.router import product_router

app = FastAPI(
    title="Заказ печати",
    description="*EndPoint с замочком - только для авторизировнных пользователей*",
    debug=True
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://profibook.pro/",
        "http://profibook.pro/",
        "http://localhost",
        "http://localhost:8080",
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1",
        "http://127.0.0.1:8080",
        "http://5.35.84.51",
        "http://5.35.84.51:8080",
        "http://profi24test.profi24.beget.tech",
        "https://api.profibook.pro",
        "https://api.profibook.pro:8080",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, tags=["auth"])
app.include_router(user_router, tags=["user"])
app.include_router(admin_router, tags=["admin"], prefix="/admin")
app.include_router(product_router, tags=["product"])

app.mount("/media", StaticFiles(directory='media'), name='media')
