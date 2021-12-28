from rest_framework import serializers,viewsets

from backend.apps.modules.models import Module

class ModuleSerializer(serializers.HyperlinkedModelSerializer):
    # classes = serializers.PrimaryKeyRelatedField(many=True,read_only=True)

    class Meta:
        model = Module
        fields = ['id', 'name']
        
# class ModuleClassesViewSet(viewsets.ViewSet):
    
#     queryset = Module.objects.all()
    
#     def list(self, request):
#         pass

#     def create(self, request):
#         pass

#     def retrieve(self, request, pk=None):
#         pass

#     def update(self, request, pk=None):
#         pass

#     def partial_update(self, request, pk=None):
#         pass

#     def destroy(self, request, pk=None):
#         pass
        

# Criar um viewset para a consulta para a dashboard
# https://www.django-rest-framework.org/api-guide/viewsets/
# from django.shortcuts import get_object_or_404
# from myapps.serializers import UserSerializer
# from rest_framework import viewsets
# from rest_framework.response import Response

# class UserViewSet(viewsets.ViewSet):
#     """
#     A simple ViewSet for listing or retrieving users.
#     """
#     def list(self, request):
#         queryset = User.objects.all()
#         serializer = UserSerializer(queryset, many=True)
#         return Response(serializer.data)

#     def retrieve(self, request, pk=None):
#         queryset = User.objects.all()
#         user = get_object_or_404(queryset, pk=pk)
#         serializer = UserSerializer(user)
#         return Response(serializer.data)

