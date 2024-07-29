# shitr_posts/serializers.py

from rest_framework import serializers
from .models import 

class ShitrPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShitrPost
        fields = ['location', 'username', 'rating']

    def create(self, validated_data):
        post = ShitrPost.objects.create_post(
            location=validated_data['location'],
            username=validated_data['username'],
            rating=validated_data['rating']
        )
        return user