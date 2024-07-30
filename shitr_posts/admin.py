# shitr_posts/admin.py

from django.contrib import admin
from .models import ShitrPost

@admin.register(ShitrPost)
class ShitrPostAdmin(admin.ModelAdmin):
    list_display = ('location', 'username', 'rating')
    search_fields = ('location', 'username')