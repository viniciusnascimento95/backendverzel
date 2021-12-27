from django.db import models

class TimestampableMixin(models.Model):
    created_at = models.DateTimeField('Criado em', auto_now_add=True)
    update_at = models.DateTimeField('Atualizado em', auto_now=True, null=True)

    class Meta:
        abstract = True

class Module(TimestampableMixin):
    name = models.CharField(max_length=200, null=True)

    class Meta:
            # ordering = ['-id']
            verbose_name = 'Module'
            verbose_name_plural = "Modules"

    objects = models.Manager()
    