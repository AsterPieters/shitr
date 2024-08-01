# shitr_users/urls.py

from django.urls import path
from .views import shitr_posts

urlpatterns = [
    path('shitr_posts/', shitr_posts),
]
