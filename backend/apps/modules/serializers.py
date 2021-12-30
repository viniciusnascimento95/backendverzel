from rest_framework import serializers

from backend.apps.modules.models import Module
from backend.apps.classes.serializers import ClassSerializer

class ModuleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Module
        fields = ['id', 'name']

class DashboardSerializer(serializers.ModelSerializer):    
    classes = ClassSerializer(many=True, read_only=True)
    qtd_classes = serializers.IntegerField(source='classes.count', read_only=True)
    http_method_names = ['get']
    
    class Meta:
        model = Module
        fields = ['id', 'name' , 'classes' , 'qtd_classes']       
