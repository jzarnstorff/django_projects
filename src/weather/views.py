from django.shortcuts import render
from django.views import View

from weather.models import City
from weather.forms import CityForm

class WeatherView(View):

    template = 'weather/index.html'
    form = CityForm()
    context = { 'form': form }

    def get(self, request):
        return render(request, self.template, self.context)


    def post(self, request):
        print(request.POST)
        return render(request, self.template, self.context)
