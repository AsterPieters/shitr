# shitr_users/urls.py

from django.urls import path
from .views import create_post

urlpatterns = [
    path('create/', create_post),
]
