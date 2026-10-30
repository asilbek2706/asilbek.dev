from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from rest_framework.throttling import ScopedRateThrottle
from rest_framework.views import APIView

from common.tasks import send_telegram_notification

from common.responses import api_response
from common.recaptcha import (
    RecaptchaUnavailable,
    verify_recaptcha,
)

from .serializers import ContactMessageSerializer


class ContactCreateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []
    parser_classes = [JSONParser]

    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "contact"

    @extend_schema(
        request=ContactMessageSerializer,
        responses=dict,
    )
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)

        if not serializer.is_valid():
            return api_response(
                data=serializer.errors,
                message="Validation error",
                statuscode=status.HTTP_400_BAD_REQUEST,
                status=False,
            )

        try:
            is_valid_recaptcha = verify_recaptcha(
                request.data.get("recaptcha_token"),
                expected_action="contact_form",
            )
        except RecaptchaUnavailable:
            return api_response(
                data=[],
                message="reCAPTCHA verification is temporarily unavailable.",
                statuscode=status.HTTP_503_SERVICE_UNAVAILABLE,
                status=False,
            )

        if not is_valid_recaptcha:
            return api_response(
                data=[],
                message="reCAPTCHA verification failed. Please try again.",
                statuscode=status.HTTP_400_BAD_REQUEST,
                status=False,
            )

        contact_message = serializer.save()

        telegram_message = (
            "?? Yangi portfolio xabari\n\n"
            f"?? Ism: {contact_message.name}\n"
            f"?? Email: {contact_message.email}\n"
            f"?? Mavzu: {contact_message.subject}\n\n"
            f"?? Xabar:\n{contact_message.message}"
        )

        send_telegram_notification.delay(telegram_message)

        return api_response(
            data={"id": contact_message.id},
            message="Message sent successfully",
            statuscode=status.HTTP_201_CREATED,
        )

