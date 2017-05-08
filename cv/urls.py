from django.conf.urls import url
from . import views


app_name = "cv"

urlpatterns = [
    # cv/
    url(r'^$', views.index, name="index"),
]
