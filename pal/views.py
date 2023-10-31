from django.shortcuts import render, redirect
from .models import *
from .forms import UserRegisterForm
from django.contrib import messages

# Create your views here.

def register(request):
	if request.method == 'POST':
		form = UserRegisterForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data['username']
			messages.success(request, f'Usuario {username} creado')
			return redirect('login')
	else:
		form = UserRegisterForm()

	context = { 'form' : form }
	return render(request, 'register.html', context)


def loadHome(request):
      return render(request, "home.html")

def profe(request):
    return render(request, "admin.html")


def perfil(request):
    return render(request, "perfil.html")

def cargarGestion(request):
    cursosListados = Curso.objects.all()
    return render(request, "gestionCursos.html", {"cursos":cursosListados})

def registrarCurso(request):
    codigo=request.POST['txtCodigo']
    nombre=request.POST['txtNombre']
    horas=request.POST['numHoras']
    
    curso=Curso.objects.create(
        codigo=codigo, nombre=nombre, horas=horas)
    return redirect('/')

def edicionCurso(request, codigo):
    curso=Curso.objects.get(codigo=codigo)
    return render(request,"edicionCurso.html",{"curso":curso})


def editarCurso(request):
    codigo=request.POST['txtCodigo']
    nombre=request.POST['txtNombre']
    horas=request.POST['numHoras']
    curso=Curso.objects.get(codigo=codigo)
    curso.nombre= nombre
    curso.horas=horas 
    curso.save()
    return redirect('/')
    
    

def eliminarCurso(request, codigo):
    curso = Curso.objects.get(codigo=codigo)
    curso.delete()
    return redirect('/')


    
    