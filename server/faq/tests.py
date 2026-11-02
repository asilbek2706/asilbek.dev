from django.test import TestCase
from rest_framework.test import APIClient

from .models import FAQ


class FAQAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = "/api/v1/faq/"

    def test_only_active_faqs_are_public(self):
        FAQ.objects.create(
            question="Active question",
            answer="Active answer",
            order=1,
            is_active=True,
        )
        FAQ.objects.create(
            question="Inactive question",
            answer="Inactive answer",
            order=2,
            is_active=False,
        )

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data["data"]), 1)
        self.assertEqual(
            response.data["data"][0]["question"],
            "Active question",
        )

    def test_faqs_follow_configured_order(self):
        FAQ.objects.create(
            question="Second question",
            answer="Second answer",
            order=2,
        )
        FAQ.objects.create(
            question="First question",
            answer="First answer",
            order=1,
        )

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.data["data"][0]["question"],
            "First question",
        )

    def test_empty_faq_returns_success(self):
        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data["data"], [])
