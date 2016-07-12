#-*- coding: utf-8 -*-
from django.http import HttpResponse, Http404
from django.shortcuts import render

# Create your views here.
def kwanz(request):
	return render(request, 'artiste/index.html')  
