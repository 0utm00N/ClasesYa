from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('admin.html', views.profe),
    path('user.html', views.user),
    path('perfil.html', views.perfil)
]
