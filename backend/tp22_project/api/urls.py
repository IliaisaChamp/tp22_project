from django.urls import path
from .views import RegisterView, GetUserByTelegramIDView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('user/<int:telegram_id>/', GetUserByTelegramIDView.as_view(), name='get_user_by_telegram_id'),
]
