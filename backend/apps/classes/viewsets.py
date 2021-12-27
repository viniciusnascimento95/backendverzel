from rest_framework import viewsets

from backend.apps.classes.models import Class
from backend.apps.classes.serializers import ClassSerializer

class ClassViewSet(viewsets.ModelViewSet):
    """
    Class API resource
    """
    queryset = Class.objects.all().order_by('name')
    serializer_class = ClassSerializer
    # filter_class = ModuleFilter