# shitr_users/urls.py

from django.urls import path
from .views import create_user

urlpatterns = [
    path('create/', create_user),
]
