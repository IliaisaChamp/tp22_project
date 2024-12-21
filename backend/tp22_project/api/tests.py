from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from users.models import User


class RegisterViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = "/api/register/"

    def test_register_new_user_success(self):
        payload = {
            "name": "Test User",
            "telegram_id": 123456789
        }
        response = self.client.post(self.url, data=payload)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(telegram_id=123456789).exists())

    def test_register_user_with_existing_telegram_id(self):
        User.objects.create(name="Existing User", telegram_id=123456789)
        payload = {
            "name": "Test User",
            "telegram_id": 123456789
        }
        response = self.client.post(self.url, data=payload)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(
            response.data["telegram_id"],"Этот Telegram ID уже занят.")

    def test_register_invalid_payload(self):
        payload = {
            "telegram_id": 123456789
        }
        response = self.client.post(self.url, data=payload)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("name", response.data)


class GetUserByTelegramIDViewTests(TestCase):
    def setUp(self): 
        self.user = User.objects.create(
            name="Test User",
            telegram_id=123456789)
        self.client = APIClient()
        self.base_url = "/api/user/"

    def test_get_user_by_telegram_id_success(self):
        url = f"{self.base_url}{self.user.telegram_id}/"
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "Test User")
        self.assertEqual(response.data["telegram_id"], self.user.telegram_id)

    def test_get_user_by_telegram_id_not_found(self):
        url = f"{self.base_url}999999/"
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data["error"], "User not found")
