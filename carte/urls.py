from django.conf.urls import url
from . import views


app_name = "carte"

urlpatterns = [
    # carte/
    url(r'^$', views.index, name="index"),
]
