from .base import *

DEBUG = True

ALLOWED_HOSTS = ['localhost' , '127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# INSTALLED_APPS += ['debug_toolbar',]
# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
# INTERNAL_IPS = ['127.0.0.1']
#MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware', ]
#python manage.py runserver --settings=caveira.settings.development
