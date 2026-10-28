from rest_framework.views import APIView

from common.responses import api_response

from .models import Question
from .serializers import QuestionSerializer


class QuestionListView(APIView):
    def get(self, request):
        questions = Question.objects.filter(is_active=True)

        serializer = QuestionSerializer(
            questions,
            many=True,
        )

        return api_response(
            data=serializer.data,
            message="Success",
        )
