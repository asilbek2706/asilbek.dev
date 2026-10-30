from unittest.mock import patch

from django.core.cache import cache
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework.throttling import ScopedRateThrottle

from contact.models import ContactMessage


class ContactAPITestCase(TestCase):
    def setUp(self):
        cache.clear()

        self.client = APIClient()
        self.url = "/api/v1/contact/"

        self.valid_payload = {
            "name": "Test User",
            "email": "test@example.com",
            "subject": "Portfolio test",
            "message": "Bu contact API uchun test xabar.",
            "recaptcha_token": "valid-token",
        }

    @patch("contact.views.verify_recaptcha", return_value=True)
    @patch("contact.views.send_telegram_notification.delay", return_value=True)
    def test_contact_success(self, mock_telegram, mock_recaptcha):
        response = self.client.post(
            self.url,
            self.valid_payload,
            format="json",
        )

        self.assertEqual(response.status_code, 201)
        self.assertTrue(response.data["status"])
        self.assertEqual(ContactMessage.objects.count(), 1)

        mock_recaptcha.assert_called_once()
        mock_telegram.assert_called_once()

    def test_contact_invalid_email(self):
        payload = self.valid_payload.copy()
        payload["email"] = "not-an-email"

        response = self.client.post(
            self.url,
            payload,
            format="json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertFalse(response.data["status"])

    def test_contact_short_message(self):
        payload = self.valid_payload.copy()
        payload["message"] = "short"

        response = self.client.post(
            self.url,
            payload,
            format="json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertFalse(response.data["status"])

    @patch("contact.views.verify_recaptcha", return_value=False)
    def test_contact_invalid_recaptcha(self, mock_recaptcha):
        response = self.client.post(
            self.url,
            self.valid_payload,
            format="json",
        )

        self.assertEqual(response.status_code, 400)
        self.assertFalse(response.data["status"])

    @patch("contact.views.verify_recaptcha")
    def test_contact_recaptcha_unavailable(self, mock_recaptcha):
        from common.recaptcha import RecaptchaUnavailable

        mock_recaptcha.side_effect = RecaptchaUnavailable

        response = self.client.post(
            self.url,
            self.valid_payload,
            format="json",
        )

        self.assertEqual(response.status_code, 503)
        self.assertFalse(response.data["status"])

    @patch.object(ScopedRateThrottle, "get_rate", return_value="2/minute")
    @patch("contact.views.verify_recaptcha", return_value=True)
    @patch("contact.views.send_telegram_notification.delay", return_value=True)
    def test_contact_rate_limit(
        self,
        mock_telegram,
        mock_recaptcha,
        mock_get_rate,
    ):
        cache.clear()

        for _ in range(2):
            response = self.client.post(
                self.url,
                self.valid_payload,
                format="json",
            )
            self.assertEqual(response.status_code, 201)

        response = self.client.post(
            self.url,
            self.valid_payload,
            format="json",
        )

        self.assertEqual(response.status_code, 429)
        self.assertEqual(ContactMessage.objects.count(), 2)

