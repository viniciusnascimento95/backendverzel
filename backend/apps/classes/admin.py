from django.contrib import admin

from backend.apps.classes.models import Class

class ClassAdmin(admin.ModelAdmin):
    list_display = ('id' , 'name', 'module_id', 'created_at' , 'update_at')
    # list_filter = ('id','name')
    search_fields =('id','name')
    
    # def __str__(self):
    # return 'Modulo: ' + self.name

admin.site.register(Class, ClassAdmin)