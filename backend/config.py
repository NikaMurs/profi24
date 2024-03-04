from os import getenv
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# Переменные для БД
USER = getenv("USER_NAME")
PASSWORD = getenv("PASSWORD")
MYSQL_DATABASE = getenv("DATABASE_NAME")
MYSQL_SERVER = getenv("HOST")


# Переменные для шифрования
SECRET_KEY = getenv("SECRET_KEY")
ALGORITHM = getenv("ALGORITHM")
LIFETIME = int(getenv("LIFETIME"))
SECRET_KEY_RESET_PASSWORD = getenv("SECRET_KEY_RESET_PASSWORD")
