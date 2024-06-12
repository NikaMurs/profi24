from os import getenv
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# Переменные для боевой БД
USER = getenv("PS_USERNAME")
PASSWORD = getenv("PS_PASSWORD")
DATABASE = getenv("PS_NAME_SERVER")
SERVER = getenv("PS_ADDRESS_SERVER")


# Переменные для тестовой БД
TEST_USER = getenv("TEST_USER_NAME")
TEST_PASSWORD = getenv("TEST_PASSWORD")
TEST_MYSQL_DATABASE = getenv("TEST_DATABASE_NAME")
TEST_MYSQL_SERVER = getenv("TEST_HOST")

SECRET = getenv("SECRET")

# Переменные для шифрования
# SECRET_KEY = getenv("SECRET_KEY")
# ALGORITHM = getenv("ALGORITHM")
# LIFETIME = int(getenv("LIFETIME"))
# SECRET_KEY_RESET_PASSWORD = getenv("SECRET_KEY_RESET_PASSWORD")
