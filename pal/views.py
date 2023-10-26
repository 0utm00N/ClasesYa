from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, "home.html")

def profe(request):
    return render(request, "admin.html")

def user(request):
    return render(request, "user.html")

def perfil(request):
    return render(request, "perfil.html")