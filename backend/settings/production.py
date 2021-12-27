from .base import *

DEBUG=False

ALLOWED_HOSTS = ['*']

# ALLOWED_HOSTS = ['localhost' , '127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'backend_db',
        'USER': 'verzel',
        'HOST': 'db', # set in docker-compose.yml
        'PORT': 5432, # default postgres port
        'PASSWORD': 'ZBPYz1Y+C*'
    }
}

# reeenviar senha
#EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
# EMAIL_HOST = 'smtp.gmail.com'
# EMAIL_HOST_USER = 'texxxxxxte@gmail.com'
# EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', 'yourpassword')
# EMAIL_HOST_PASSWORD = 'testepassword'
# EMAIL_PORT = 587
# DEFAULT_SUBJECT_PREFIX = '[Redefinição | SARV]'
# EMAIL_USE_TLS = True
# DEFAULT_FROM_EMAIL = 'Sarv <vinicius.souza@faculdadeporto.com.br>'
