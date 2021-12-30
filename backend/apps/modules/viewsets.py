from rest_framework import viewsets, mixins
from rest_framework.generics import GenericAPIView

from backend.apps.modules.models import Module
from backend.apps.modules.serializers import ModuleSerializer, DashboardSerializer

class ModuleViewSet(viewsets.ModelViewSet):
    """
    Modules API resource
    """
    queryset = Module.objects.all().order_by('name')
    serializer_class = ModuleSerializer
    
class DashboardAPIView(mixins.ListModelMixin, GenericAPIView):
    
    queryset = Module.objects.all().order_by('name')
    serializer_class = DashboardSerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)