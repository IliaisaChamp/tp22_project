from django.db import models


class User(models.Model):
    name = models.CharField(
        max_length=150,
    )
    telegram_id = models.IntegerField(unique=True)

    def __str__(self):
        return self.name
