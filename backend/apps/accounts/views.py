from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User as UserBase
from backend.apps.accounts.serializers import UserSerializer

class UserCreate(generics.CreateAPIView):
    queryset = UserBase.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )