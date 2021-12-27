from rest_framework import serializers

from backend.apps.modules.models import Module

class ModuleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Module
        fields = ('id', 'name')

