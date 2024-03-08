from os import getenv
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# Переменные для боевой БД
USER = getenv("USER_NAME")
PASSWORD = getenv("PASSWORD")
MYSQL_DATABASE = getenv("DATABASE_NAME")
MYSQL_SERVER = getenv("HOST")

# Переменные для тестовой БД
TEST_USER = getenv("TEST_USER_NAME")
TEST_PASSWORD = getenv("TEST_PASSWORD")
TEST_MYSQL_DATABASE = getenv("TEST_DATABASE_NAME")
TEST_MYSQL_SERVER = getenv("TEST_HOST")


# Переменные для шифрования
# SECRET_KEY = getenv("SECRET_KEY")
# ALGORITHM = getenv("ALGORITHM")
# LIFETIME = int(getenv("LIFETIME"))
# SECRET_KEY_RESET_PASSWORD = getenv("SECRET_KEY_RESET_PASSWORD")
