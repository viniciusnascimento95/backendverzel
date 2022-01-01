#!/bin/sh

# python manage.py collectstatic --noinput --clear --settings=backend.settings.production
python manage.py migrate --noinput --settings=backend.settings.production
python manage.py runserver 0.0.0.0:8000 --settings=backend.settings.production
