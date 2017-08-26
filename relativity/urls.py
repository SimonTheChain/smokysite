from django.conf.urls import url
from . import views


app_name = "relativity"

urlpatterns = [
    # relativity/
    url(r'^$', views.index, name="index"),
]
