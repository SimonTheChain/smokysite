from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^home/', include("home.urls", namespace="home")),
    url(r'^cv/', include("cv.urls", namespace="cv")),
    url(r'^carte/', include("carte.urls", namespace="carte")),
    url(r'^relativity/', include("relativity.urls", namespace="relativity")),
]
