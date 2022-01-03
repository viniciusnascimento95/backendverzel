#!/bin/sh

# python manage.py collectstatic --noinput --clear --settings=backend.settings.production
#create supperuser 
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@admin.com', 'secret')" | python manage.py shell
python manage.py migrate --noinput --settings=backend.settings.production
python manage.py runserver 0.0.0.0:8000 --settings=backend.settings.production
