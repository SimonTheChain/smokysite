from django.shortcuts import render
from .forms import SpeedForm


def speed(distance, duration):
    """
    Calculates speed
    :param distance:
    :param duration:
    :return speed:
    """
    results = distance / duration
    return results


def index(request):
    """
    Home page of the Relativity app
    :param request:
    :return home page with values if available:
    """
    form = SpeedForm(request.POST or None)

    if form.is_valid():
        speed_result = speed(
            distance=int(form.cleaned_data["distance"]),
            duration=int(form.cleaned_data["duration"]))
        return render(
            request,
            'relativity/index.html',
            context={
                "speed": speed_result,
                "distance": form.cleaned_data["distance"],
                "duration": form.cleaned_data["duration"]})
    return render(request, 'relativity/index.html')
