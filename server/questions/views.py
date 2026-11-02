from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView
from django.db.models import Q

from common.responses import api_response

from .models import Question
from .serializers import QuestionSerializer


class QuestionListView(APIView):
    @extend_schema(responses=QuestionSerializer(many=True))
    def get(self, request):
        questions = Question.objects.filter(
            is_active=True,
        ).filter(
            Q(contact_message__isnull=True)
            | Q(
                contact_message__publish_as_faq=True,
                contact_message__answer__gt="",
            )
        )

        serializer = QuestionSerializer(
            questions,
            many=True,
        )

        return api_response(
            data=serializer.data,
            message="Success",
        )
