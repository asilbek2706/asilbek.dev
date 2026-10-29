import json
from unittest.mock import MagicMock, patch

from django.test import TestCase, override_settings

from common.recaptcha import RecaptchaUnavailable, verify_recaptcha


class RecaptchaTestCase(TestCase):
    @override_settings(RECAPTCHA_SECRET_KEY="test-secret")
    @patch("common.recaptcha.urlopen")
    def test_recaptcha_success(self, mock_urlopen):
        response = MagicMock()
        response.read.return_value = json.dumps({
            "success": True,
            "action": "contact_form",
            "score": 0.9,
        }).encode("utf-8")

        mock_urlopen.return_value.__enter__.return_value = response

        result = verify_recaptcha(
            "test-token",
            expected_action="contact_form",
        )

        self.assertTrue(result)

    @override_settings(RECAPTCHA_SECRET_KEY="test-secret")
    @patch("common.recaptcha.urlopen")
    def test_recaptcha_rejects_low_score(self, mock_urlopen):
        response = MagicMock()
        response.read.return_value = json.dumps({
            "success": True,
            "action": "contact_form",
            "score": 0.2,
        }).encode("utf-8")

        mock_urlopen.return_value.__enter__.return_value = response

        result = verify_recaptcha(
            "test-token",
            expected_action="contact_form",
        )

        self.assertFalse(result)

    @override_settings(RECAPTCHA_SECRET_KEY="test-secret")
    @patch("common.recaptcha.urlopen")
    def test_recaptcha_rejects_wrong_action(self, mock_urlopen):
        response = MagicMock()
        response.read.return_value = json.dumps({
            "success": True,
            "action": "login",
            "score": 0.9,
        }).encode("utf-8")

        mock_urlopen.return_value.__enter__.return_value = response

        result = verify_recaptcha(
            "test-token",
            expected_action="contact_form",
        )

        self.assertFalse(result)

    @override_settings(RECAPTCHA_SECRET_KEY="")
    def test_recaptcha_without_secret_raises_unavailable(self):
        with self.assertRaises(RecaptchaUnavailable):
            verify_recaptcha(
                "test-token",
                expected_action="contact_form",
            )

    @override_settings(RECAPTCHA_SECRET_KEY="test-secret")
    @patch("common.recaptcha.urlopen")
    def test_recaptcha_request_error_raises_unavailable(self, mock_urlopen):
        from urllib.error import URLError

        mock_urlopen.side_effect = URLError("Connection failed")

        with self.assertRaises(RecaptchaUnavailable):
            verify_recaptcha(
                "test-token",
                expected_action="contact_form",
            )

    @override_settings(RECAPTCHA_SECRET_KEY="test-secret")
    @patch("common.recaptcha.urlopen")
    def test_recaptcha_google_failure(self, mock_urlopen):
        response = MagicMock()
        response.read.return_value = json.dumps({
            "success": False,
            "score": 0.0,
        }).encode("utf-8")

        mock_urlopen.return_value.__enter__.return_value = response

        result = verify_recaptcha(
            "test-token",
            expected_action="contact_form",
        )

        self.assertFalse(result)
