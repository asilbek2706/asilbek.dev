from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView

from common.responses import api_response

from .models import Project
from .serializers import ProjectSerializer


class ProjectListView(APIView):
    @extend_schema(responses=ProjectSerializer(many=True))
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(
            projects,
            many=True,
            context={"request": request},
        )

        return api_response(
            data=serializer.data,
            message="Success",
        )
