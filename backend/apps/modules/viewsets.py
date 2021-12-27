from rest_framework import viewsets

from backend.apps.modules.models import Module
from backend.apps.modules.serializers import ModuleSerializer

class ModuleViewSet(viewsets.ModelViewSet):
    """
    Modules API resource
    """
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    # filter_class = ModuleFilter