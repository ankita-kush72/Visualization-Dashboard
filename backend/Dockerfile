# Choose Operating system
#   +
# Install python
FROM python:3.13.0b3-slim

RUN apt-get update 
RUN apt-get install -y gcc
RUN apt-get install -y default-libmysqlclient-dev
RUN apt-get install -y pkg-config 
RUN rm -rf /var/lib/apt/lists/*

# Set working Directory
WORKDIR /code/app

# Copy project code
COPY . /code/app

COPY requirements.txt . /code/app/

# Install dependencies
RUN pip install -r requirements.txt
##

# Decide and expose Port in which python code will be running
EXPOSE 8000

# Run Project
ENTRYPOINT ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]






