from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


# Create your models here.

class Post(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
	timestamp = models.DateTimeField(default=timezone.now)
	content = models.TextField()

	class Meta:
		ordering = ['-timestamp']

	def __str__(self):
		return f'{self.user.username}: {self.content}'


class Curso(models.Model):
    
	codigo = models.CharField(primary_key=True,max_length=6)
	nombre = models.CharField(max_length=50)
	horas = models.PositiveSmallIntegerField()
	
	def __str__(self):
		texto = "{0} ({1})"	
		return texto.format(self.nombre,self.horas)
