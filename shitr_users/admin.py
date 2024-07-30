# shitr_users/admin.py
from django.contrib import admin
from .models import ShitrUser

@admin.register(ShitrUser)
class ShitrUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email')
    search_fields = ('username', 'email')