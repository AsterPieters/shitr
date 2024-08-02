# shitr_posts/models.py

from django.db import models

class ShitrPostManager(models.Manager):
    def create_post(self, post_name, location, username, image, comfort, smell, aesthetic, toilet_paper, overall_experience, description):
        post = self.model(
            post_name=post_name,
            location=location,
            username=username,
            image=image,
            comfort=comfort,
            smell=smell,
            aesthetic=aesthetic,
            toilet_paper=toilet_paper,
            overall_experience=overall_experience,
            description=description
        )
        post.save(using=self._db)
        return post

class ShitrPost(models.Model):
    # Post info
    post_name = models.CharField(max_length=30)
    location = models.CharField(max_length=100)
    username = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)

    image = models.ImageField(upload_to='images/%Y/%m/%d/', blank=True, null=True)

    # Rating
    comfort = models.FloatField()
    smell = models.FloatField()
    aesthetic = models.FloatField()
    toilet_paper = models.FloatField()
    overall_experience = models.FloatField()
    description = models.TextField(max_length=280, blank=True)

    objects = ShitrPostManager()
    
    def __str__(self):
        return f"Review {self.post_name}for {self.location} from {self.username}."