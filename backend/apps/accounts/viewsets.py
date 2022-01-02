from django.contrib.auth.models import User as UserBase
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from backend.apps.accounts.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    User API resource
    """
    permission_classes = (IsAuthenticated, )
    queryset = UserBase.objects.all()
    serializer_class = UserSerializer
    # filter_class = ModuleFilter    