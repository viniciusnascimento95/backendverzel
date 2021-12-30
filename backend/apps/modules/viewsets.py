from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.apps.modules.models import Module
from backend.apps.classes.models import Class
from backend.apps.modules.serializers import ModuleSerializer

class ModuleViewSet(viewsets.ModelViewSet):
    """
    Modules API resource
    """
    queryset = Module.objects.all().order_by('name')
    serializer_class = ModuleSerializer