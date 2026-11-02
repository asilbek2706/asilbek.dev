from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView

from common.responses import api_response

from .models import FAQ
from .serializers import FAQSerializer


class FAQListView(APIView):
    @extend_schema(responses=FAQSerializer(many=True))
    def get(self, request):
        faqs = FAQ.objects.filter(
            is_active=True,
        )

        serializer = FAQSerializer(
            faqs,
            many=True,
        )

        return api_response(
            data=serializer.data,
            message="Success",
        )
