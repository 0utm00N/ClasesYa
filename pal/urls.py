from django.urls import path
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('register.html', views.register, name='register'),
    path('', LoginView.as_view(template_name='login.html'), name='login'),
	path('logout/', LogoutView.as_view(template_name='logout.html'), name='logout'),
    path('admin.html', views.profe,),
    path('home/perfil.html', views.perfil, name="perfil"),
    path('home/', views.loadHome, name="home"),
    path('home/gestionCursos.html',views.cargarGestion, name="gestionCursos"),
    path('home/registrarCurso/', views.registrarCurso, name="registrarCurso"),
    path('home/edicionCurso/<codigo>', views.edicionCurso),
    path('editarCurso/', views.editarCurso),
    path('home/eliminarCurso/<codigo>', views.eliminarCurso)
]
