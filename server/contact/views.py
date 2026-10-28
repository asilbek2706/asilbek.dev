from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from rest_framework.throttling import ScopedRateThrottle
from rest_framework.views import APIView

from common.responses import api_response

from .serializers import ContactMessageSerializer


class ContactCreateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []
    parser_classes = [JSONParser]

    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "contact"

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)

        if not serializer.is_valid():
            return api_response(
                data=serializer.errors,
                message="Validation error",
                statuscode=status.HTTP_400_BAD_REQUEST,
                status=False,
            )

        contact_message = serializer.save()

        return api_response(
            data={
                "id": contact_message.id,
            },
            message="Message sent successfully",
            statuscode=status.HTTP_201_CREATED,
        )
