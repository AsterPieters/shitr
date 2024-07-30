# shitr_posts/models.py

from django.db import models

class ShitrPostManager(models.Manager):
    def create_post(self, location, username, rating):
        post = self.model(location=location, username=username, rating=rating)
        post.save(using=self._db)
        return post

class ShitrPost(models.Model):
    location = models.CharField(max_length=100)
    username = models.CharField(max_length=30)
    rating = models.FloatField()

    objects = ShitrPostManager()

    def __str__(self):
        return f'{self.username} at {self.location} with rating {self.rating}'