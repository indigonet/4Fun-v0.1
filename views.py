from django.shortcuts import render
from .models import Pag1juegos,Aventura

# Create your views here.
def home(request):
    Juegos = Pag1juegos.objects.all()
    data = {
        'juegos':Juegos 
    }
    return render(request,'core/home.html',data)

def Adventures (request):
    JuegosAD = Aventura.objects.all()
    data = {
        'juegosad':JuegosAD
    }
    return render(request,'core/Adventures.html',data)
