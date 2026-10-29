from django.test import TestCase
from rest_framework.test import APIClient

from contact.models import ContactMessage
from questions.models import Question


class QuestionsAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = "/api/v1/questions-list/"

    def test_only_active_questions_are_public(self):
        Question.objects.create(
            question="Ochiq savol",
            answer="Ochiq javob",
            is_active=True,
        )
        Question.objects.create(
            question="Yopiq savol",
            answer="Yopiq javob",
            is_active=False,
        )

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data["data"]), 1)
        self.assertEqual(
            response.data["data"][0]["question"],
            "Ochiq savol",
        )

    def test_answered_contact_message_can_be_public_question(self):
        contact = ContactMessage.objects.create(
            name="Test User",
            email="test@example.com",
            subject="Portfolio question",
            message="Bu savol sifatida yuborilgan xabar.",
            answer="Bu admin javobi.",
        )

        question = Question.objects.create(
            question=contact.message,
            answer=contact.answer,
            is_active=True,
            contact_message=contact,
        )

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data["data"]), 1)
        self.assertEqual(
            response.data["data"][0]["answer"],
            "Bu admin javobi.",
        )
        self.assertEqual(
            response.data["data"][0]["question"],
            question.question,
        )

    def test_empty_questions_returns_success(self):
        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["data"], [])
