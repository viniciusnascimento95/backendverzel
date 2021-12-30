from rest_framework import serializers

# from backend.apps.modules.serializers import ModuleSerializer
from backend.apps.classes.models import Class

class ClassSerializer(serializers.HyperlinkedModelSerializer):
    # module = ModuleSerializer(read_only=True)

    class Meta:
        model = Class
        fields = ['id', 'name','date' , 'module']

