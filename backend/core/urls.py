
from django.urls import path, include
from . import views

urlpatterns = [
    path('load_data',views.load_data,name="load-data"),
    path('get_data/',views.get_data,name='get-data'),

]