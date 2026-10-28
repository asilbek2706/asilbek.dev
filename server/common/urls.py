from django.urls import include, path

from .views import HealthCheckView

urlpatterns = [
    path("health/", HealthCheckView.as_view(), name="health-check"),
    path("about/", include("about.urls")),
    path("projects/", include("projects.urls")),
]
