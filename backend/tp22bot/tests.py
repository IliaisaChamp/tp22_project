import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from main import Base, User, add_user, get_all_users

# Создание тестовой базы данных
@pytest.fixture
def test_db():
    engine = create_engine("sqlite:///:memory:")
    Base.metadata.create_all(engine)
    TestSession = sessionmaker(bind=engine)
    session = TestSession()
    yield session
    session.close()
    Base.metadata.drop_all(engine)

# Тесты для работы с базой данных
def test_add_user(test_db):
    user_id = 12345
    username = "testuser"
    add_user(test_db, user_id, username)

    # Проверка добавления пользователя
    user = test_db.query(User).filter_by(id=user_id).first()
    assert user is not None
    assert user.name == username


def test_no_duplicate_users(test_db):
    user_id = 12345
    username = "testuser"
    add_user(test_db, user_id, username)
    add_user(test_db, user_id, username)  # Попытка добавить того же пользователя второй раз

    # Убедимся, что пользователь добавлен только один раз
    users = test_db.query(User).filter_by(id=user_id).all()
    assert len(users) == 1


def test_get_all_users(test_db):
    # Добавляем несколько пользователей
    add_user(test_db, 1, "User1")
    add_user(test_db, 2, "User2")

    users = get_all_users(test_db)

    # Проверка списка пользователей
    assert len(users) == 2
    assert users[0].name == "User1"
    assert users[1].name == "User2"

# Тесты функций бота
def test_start_command():
    from telegram.ext import CallbackContext
    from telegram import Update, Message

    class MockMessage:
        def __init__(self):
            self.text = None

        def reply_text(self, text):
            self.text = text

    class MockUpdate:
        def __init__(self):
            self.message = MockMessage()

    update = MockUpdate()
    context = CallbackContext(None)

    from main import start

    start(update, context)

    assert "Добро пожаловать" in update.message.text


def test_users_command(test_db):
    from telegram.ext import CallbackContext
    from telegram import Update, Message

    class MockMessage:
        def __init__(self):
            self.text = None

        def reply_text(self, text):
            self.text = text

    class MockUpdate:
        def __init__(self):
            self.message = MockMessage()

    # Добавляем тестовых пользователей
    add_user(test_db, 1, "User1")
    add_user(test_db, 2, "User2")

    update = MockUpdate()
    context = CallbackContext(None)

    from main import users

    users(update, context)

    # Проверяем, что список пользователей выведен корректно
    assert "User1" in update.message.text
    assert "User2" in update.message.text
