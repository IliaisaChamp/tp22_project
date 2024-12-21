# **Как запустить проект:**
необходим python 3.12.8
перейти в проект

Cоздать и активировать виртуальное окружение:
```
python -m venv мenv
```
```
source env/bin/activate
```
Установить зависимости из файла requirements.txt:
```
python -m pip install --upgrade pip
```
```
pip install -r requirements.txt
```
Выполнить миграции:
```
python manage.py migrate
```
Запустить проект:
```
python3 manage.py runserver
```
# **Примеры запросов API**

Создание пользователя:

```
   POST /api/register/
```
  {
    "name":"example_user",
    "telegram_id": 1236456789
}
Получение пользователя по telegram_id
```
 GET /api/user/<int:telegram_id>/
```