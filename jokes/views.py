from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import render

import requests


def index(request):
    return render(request, 'jokes/index.html')


@login_required
def graph(request):
    return render(request, 'jokes/graph.html')


def data(request):
    res = requests.get('http://api.icndb.com/jokes/random')
    return JsonResponse(res.json())
