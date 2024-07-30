# shitr_users/serializers.py

from rest_framework import serializers
from .models import ShitrUser

class ShitrUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShitrUser
        fields = ['username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = ShitrUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user