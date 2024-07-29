# shitr_posts/admin.py

from django.contrib import admin
from .models import CustomUser

@admin.register(DefaulPost)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('location', 'username', 'rating')
    search_fields = ('location', 'username')