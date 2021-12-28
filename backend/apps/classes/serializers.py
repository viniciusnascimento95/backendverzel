from rest_framework import serializers

# from backend.apps.modules.models import Module
from backend.apps.classes.models import Class

class ClassSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Class
        fields = ['id', 'name','date' , 'module']

