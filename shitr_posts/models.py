# shitr_posts/models.py

from django.db import models

class ShitrPostManager()
    def create_post(self, location, username, rating):
        location = self.normalize_email(location)
        user.save(using=self._db)

class ShitrPost():
    location = models.CharField(max_length=100)
    username = models.CharField(max_length=30)
    rating = models.FloatField()

    objects = ShitrPostManager()