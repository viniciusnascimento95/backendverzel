from rest_framework import viewsets, mixins

from backend.apps.modules.models import Module
from backend.apps.modules.serializers import ModuleSerializer

class ModuleViewSet(viewsets.ModelViewSet):
    """
    Modules API resource
    """
    queryset = Module.objects.all().order_by('name')
    serializer_class = ModuleSerializer
    # http_method_names = ['get']
    # filter_class = ModuleFilter
    
# class ModuleClassViewSet(viewsets.ModelViewSet):
#     classes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    