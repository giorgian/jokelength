from django.urls import include, path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('data', views.data, name='data'),
    path('graph', views.graph, name='graph'),
    path('accounts/', include('django.contrib.auth.urls')),
]
