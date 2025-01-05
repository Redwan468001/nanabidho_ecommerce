from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.

def home(request):
    home = "This is our home page"
    return render(request, 'index.html', {'home': home})
