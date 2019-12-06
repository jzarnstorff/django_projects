from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('orders/', include('orders.urls')),
    path('weather/', include('weather.urls')),
]
