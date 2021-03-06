"""backendverzel URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path

# RestFramework
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView

from backend.apps.accounts.serializers import MyTokenObtainPairView
from backend.apps.accounts import views
from backend.apps.accounts.viewsets import UserViewSet
from backend.apps.modules.viewsets import ModuleViewSet, DashboardAPIView 
from backend.apps.classes.viewsets import ClassViewSet 

router = routers.DefaultRouter()

router.register(r'users', UserViewSet)
router.register(r'modules', ModuleViewSet)
router.register(r'classes', ClassViewSet)

urlpatterns = [
    # path('api-auth/', include('rest_framework.urls')),
    # django admin
    path('admin/', admin.site.urls),   
    # path('', include(router.urls)), 
    path('api/', include(router.urls)),
    # api public
    path('api/dashboard', DashboardAPIView.as_view()),  
    # path('api/token' , TokenObtainPairView.as_view()),
    path('api/token' , MyTokenObtainPairView.as_view()),    
    path('api/token/refresh' , TokenRefreshView.as_view()),
    path('api/register/newuser', views.UserCreate.as_view()),
] 
