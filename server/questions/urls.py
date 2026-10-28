from django.urls import path

from .views import QuestionListView

urlpatterns = [
    path("", QuestionListView.as_view(), name="question-list"),
]
