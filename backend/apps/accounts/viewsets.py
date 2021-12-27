from rest_framework import viewsets

from django.contrib.auth.models import User as UserBase
from backend.apps.accounts.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    User API resource
    """
    queryset = UserBase.objects.all()
    serializer_class = UserSerializer
    # filter_class = ModuleFilter