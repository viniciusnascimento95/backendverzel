# Pull base image from python:3
FROM python:3.8

# SET env vars
# remove buffer from container
ENV PYTHONUNBUFFERED 1

# Set default settings as `docker` settings
ENV DJANGO_SETTINGS_MODULE=backend.settings.production

# create /code folder and set as current folder
RUN mkdir /code
WORKDIR /code

# copy all source code to /code
ADD . /code/

# RUN chmod -R 755 /docker-entrypoint.sh
# ENTRYPOINT ["/docker-entrypoint.sh"]

# install pipenv package manager   
RUN pip install --upgrade pip
RUN python3 -m pip install pipenv

# install all dependencies as base path packages
RUN pipenv install --system
# RUN pip install -r requirements.txt
