# shitr_posts/admin.py

from django.contrib import admin
from .models import ShitrPost

@admin.register(ShitrPost)
class ShitrPostAdmin(admin.ModelAdmin):
    list_display = ('post_name', 'location', 'username', 'created_at')
    search_fields = ('location', 'username')
