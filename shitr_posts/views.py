# shitr_posts/views.py

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ShitrPost
from .serializers import ShitrPostsSerializer

@api_view(['POST', 'GET'])
def shitr_posts(request):
    if request.method == 'GET':
        posts = ShitrPost.objects.all()
        serializer = ShitrPostsSerializer(posts, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = ShitrPostsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
