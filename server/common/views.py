from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView

from .responses import api_response


class HealthCheckView(APIView):
    @extend_schema(responses=dict)
    def get(self, request):
        return api_response(
            data={"service": "portfolio-api"},
            message="API is running",
        )
