# shitr_posts/serializers.py

from rest_framework import serializers
from .models import ShitrPost

class ShitrPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShitrPost
        fields = [
            'post_name', 'location', 'username', 'image',
            'comfort', 'smell', 'aesthetic', 'toilet_paper', 
            'overall_experience', 'description'
        ]
        extra_kwargs = {
            'description': {'required': False}  # Make description optional
        }

    def create(self, validated_data):
        post = ShitrPost.objects.create_post(

            # Info
            post_name=validated_data['post_name'],
            location=validated_data['location'],
            username=validated_data['username'],

            # Image
            image=validated_data['image'],
            
            # Review
            comfort=validated_data['comfort'],
            smell=validated_data['smell'],
            aesthetic=validated_data['aesthetic'],
            toilet_paper=validated_data['toilet_paper'],
            overall_experience=validated_data['overall_experience'],
            description=validated_data['description'],
        )
        return post