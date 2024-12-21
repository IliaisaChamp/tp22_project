from telegram import Update, ReplyKeyboardMarkup, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, filters, ContextTypes
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

BOT_TOKEN = "7359766703:AAGoimEWuyA96OgmjHEqf_qvVUym6t0OchU"
DATABASE_URL = "sqlite:///users.db"
SITE_URL = "https://yourwebsite.com"

# Создание базы данных
Base = declarative_base()
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    telegram_id = Column(Integer, unique=True, index=True, nullable=False)
    name = Column(String, nullable=False)

# Инициализация базы данных
Base.metadata.create_all(bind=engine)

# Основная клавиатура с кнопками
MAIN_KEYBOARD = ReplyKeyboardMarkup(
    [
        ["ℹ️ О проекте", "👥 Список пользователей"],
        ["🌐 Вернуться на сайт"]
    ],
    resize_keyboard=True
)

# Inline-кнопка для сайта
INLINE_SITE_BUTTON = InlineKeyboardMarkup(
    [[InlineKeyboardButton("🌐 Перейти на сайт", url=SITE_URL)]]
)

def get_user_by_telegram_id(session, telegram_id):
    """Получает пользователя по Telegram ID."""
    return session.query(User).filter(User.telegram_id == telegram_id).first()

def create_user(session, telegram_id, name):
    """Создает нового пользователя."""
    new_user = User(telegram_id=telegram_id, name=name)
    session.add(new_user)
    session.commit()
    return new_user

# Новая функция: добавление пользователя
def add_user(telegram_id, name):
    """Добавляет пользователя в базу данных."""
    with SessionLocal() as session:
        user = User(telegram_id=telegram_id, name=name)
        session.add(user)
        session.commit()
        return user

# Новая функция: получение всех пользователей
def get_all_users():
    """Возвращает список всех пользователей."""
    with SessionLocal() as session:
        return session.query(User).all()

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Обрабатывает команду /start и автоматически регистрирует пользователя."""
    user = update.effective_user
    with SessionLocal() as session:
        db_user = get_user_by_telegram_id(session, user.id)
        if not db_user:
            # Регистрация нового пользователя
            name = user.first_name or user.username or "Без имени"
            create_user(session, user.id, name)
            await update.message.reply_text(
                f"Добро пожаловать, {name}! Вы успешно авторизовались.",
                reply_markup=MAIN_KEYBOARD
            )
        else:
            # Пользователь уже зарегистрирован
            await update.message.reply_text(
                f"С возвращением, {db_user.name}!",
                reply_markup=MAIN_KEYBOARD
            )

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Обрабатывает сообщения от пользователя."""
    text = update.message.text

    with SessionLocal() as session:
        if text == "ℹ️ О проекте":
            about_text = "Наш проект помогает в обучении с помощью папок с различными специальностями!"
            await update.message.reply_text(about_text)
        elif text == "👥 Список пользователей":
            users = session.query(User).all()
            if not users:
                await update.message.reply_text("Нет зарегистрированных пользователей.")
            else:
                user_list = "\n".join(
                    [f"- {user.name} (ID: {user.telegram_id})" for user in users]
                )
                await update.message.reply_text(f"Список зарегистрированных пользователей:\n{user_list}")
        elif text == "🌐 Вернуться на сайт":
            await update.message.reply_text(
                "Нажмите на кнопку ниже, чтобы перейти на сайт:",
                reply_markup=INLINE_SITE_BUTTON
            )
        else:
            await update.message.reply_text("Неизвестная команда. Выберите действие на клавиатуре.")

def main():
    """Основная функция запуска бота."""
    application = ApplicationBuilder().token(BOT_TOKEN).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    application.run_polling()

if __name__ == "__main__":
    main()
