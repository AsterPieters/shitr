# base/urls.py

from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework.routers import DefaultRouter
#from shitr_posts.views import ShitrPostViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts/', include('shitr_posts.urls')),
    path('api/users/', include('shitr_users.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)