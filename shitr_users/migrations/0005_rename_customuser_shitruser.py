# Generated by Django 5.0.7 on 2024-07-30 21:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shitr_users', '0004_customuser_is_active_customuser_is_staff_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='CustomUser',
            new_name='ShitrUser',
        ),
    ]
