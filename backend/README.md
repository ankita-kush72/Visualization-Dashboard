# install django
``` pip install django ```

# create project
```django-admin startproejct <project_name> .```

# create app
```django-admin startapp <app_name> ```

# install requests
``` pip install requests ```

# install Django and Django REST Framework
``` pip install  djangorestframework ```

# Uninstall Django and Django REST Framework
``` pip uninstall djangorestframework ```

# add to setting.py INSTALLED_APPS 
INSTALLED_APPS = [
     # other app
     'rest_framework',
]

# create migrations
``` python manage.py makemigrations ```

# create migrate
``` python manage.py migrate ```

# create superuser
```  python manage.py createsuperuser ```

# if port 8000 busy
netstat -aon | find /i "listening"
1. netstat -ano | findstr : "8000"
2. taskkill /F /PID  <Enter busy process port number>


# install requests
``` pip install requests ```


# install mysqlclient
```pip install mysqlclient```

# apply migrations
```python manage.py makemigrations```
```python manage.py migrate```


# run docker-compose file
```docker-compose.yml up```

# stop docker-compose file
```docker-compose.yml down```

# check lib
```pip freeze```

# check file
```pip freeze > requirements.txt```

# read file
```pip install -r requirements.txt```

# run server
`python manag.py runserver`


# install react-chartjs-2 and chat.js
`npm install react-chartjs-2 chart.js
`

## To run the project 

**Step1:** start mysql using docker with command
```docker-compose.yml up```

**Step2:** start backend 
```python manage.py runserver```


**Step3:** create virtual environments
```project name/.venv/Scripts/active```