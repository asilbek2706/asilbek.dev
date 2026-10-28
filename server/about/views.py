from rest_framework.views import APIView

from common.responses import api_response

from .models import About
from .serializers import AboutSerializer


class AboutView(APIView):
    def get(self, request):
        about = About.objects.first()

        if not about:
            return api_response(
                data=[],
                message="About information not found",
                statuscode=404,
                status=False,
            )

        serializer = AboutSerializer(
            about,
            context={"request": request},
        )

        return api_response(
            data=serializer.data,
            message="Success",
        )
