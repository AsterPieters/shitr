# base/urls.py

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts/', include('shitr_posts.urls')),
    path('api/users/', include('shitr_users.urls')),
]