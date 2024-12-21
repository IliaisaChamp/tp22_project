from rest_framework import serializers
from users.models import User


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'telegram_id']

    def create(self, validated_data):
        user = User.objects.create(
            name=validated_data['name'],
            telegram_id=validated_data['telegram_id'],
        )
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'telegram_id']
