from rest_framework import serializers

# from backend.apps.modules.models import Module
from backend.apps.classes.models import Class

class ClassSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Class
        fields = ['id', 'name','date' , 'module']


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