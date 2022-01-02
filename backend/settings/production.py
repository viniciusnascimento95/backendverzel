from .base import *

DEBUG=True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', 
        'NAME': 'verzel_db',
        'USER': 'verzel',
        'HOST': 'db', # set in docker-compose.yml
        'PORT': 3306, # default postgres port
        'PASSWORD': 'ZBPYz1Y+C*'
    }
}
