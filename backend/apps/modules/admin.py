from django.contrib import admin
from backend.apps.modules.models import Module

# Register your models here.
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('id' , 'name', 'created_at' , 'update_at')
    # list_filter = ('id','name')
    search_fields =('id','name')
admin.site.register(Module, ModuleAdmin)
