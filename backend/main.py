from fastapi import FastAPI
from auth.router import auth_router
from api.router import user_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Заказ печати",
    description="*EndPoint с замочком - только для авторизировнных пользователей*",
    debug=True
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost",
        "http://localhost:8080",
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1",
        "http://127.0.0.1:8080",
        "http://5.35.84.51",
        "http://5.35.84.51:8080",
        "http://profi24test.profi24.beget.tech"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, tags=["auth"])
app.include_router(user_router, tags=["user"])
