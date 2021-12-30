from django.contrib import admin

from backend.apps.classes.models import Class

class ClassAdmin(admin.ModelAdmin):
    list_display = ('id' , 'name', 'module_id', 'created_at' , 'update_at')
    search_fields =('id','name')
    
admin.site.register(Class, ClassAdmin)
