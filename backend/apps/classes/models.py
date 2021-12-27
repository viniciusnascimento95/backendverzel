from django.db import models
from django.utils import timezone
from backend.apps.modules.models import Module

class TimestampableMixin(models.Model):
    created_at = models.DateTimeField('Criado em', auto_now_add=True)
    update_at = models.DateTimeField('Atualizado em', auto_now=True, null=True)

    class Meta:
        abstract = True

class Class(TimestampableMixin):
    name = models.CharField(max_length=200, null=True)
    module = models.ForeignKey(Module, verbose_name='Modulo', on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now)