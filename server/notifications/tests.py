from unittest.mock import Mock, patch

from django.test import TestCase, override_settings

from notifications.telegram import send_telegram_message


class TelegramNotificationTestCase(TestCase):
    @override_settings(
        TELEGRAM_BOT_TOKEN="test-token",
        TELEGRAM_CHAT_ID="123456",
    )
    @patch("notifications.telegram.requests.post")
    def test_send_telegram_message_success(self, mock_post):
        mock_response = Mock()
        mock_response.json.return_value = {
            "ok": True,
            "result": {"message_id": 123},
        }
        mock_response.raise_for_status.return_value = None
        mock_post.return_value = mock_response

        result = send_telegram_message("Test Telegram message")

        self.assertTrue(result)

        mock_post.assert_called_once_with(
            "https://api.telegram.org/bottest-token/sendMessage",
            json={
                "chat_id": "123456",
                "text": "Test Telegram message",
            },
            timeout=10,
        )

    @override_settings(
        TELEGRAM_BOT_TOKEN="",
        TELEGRAM_CHAT_ID="",
    )
    @patch("notifications.telegram.requests.post")
    def test_send_telegram_message_without_configuration(self, mock_post):
        result = send_telegram_message("Test Telegram message")

        self.assertFalse(result)
        mock_post.assert_not_called()

    @override_settings(
        TELEGRAM_BOT_TOKEN="test-token",
        TELEGRAM_CHAT_ID="123456",
    )
    @patch("notifications.telegram.requests.post")
    def test_send_telegram_message_api_error(self, mock_post):
        mock_response = Mock()
        mock_response.json.return_value = {
            "ok": False,
            "description": "Bad Request",
        }
        mock_response.raise_for_status.return_value = None
        mock_post.return_value = mock_response

        result = send_telegram_message("Test Telegram message")

        self.assertFalse(result)

    @override_settings(
        TELEGRAM_BOT_TOKEN="test-token",
        TELEGRAM_CHAT_ID="123456",
    )
    @patch("notifications.telegram.requests.post")
    def test_send_telegram_message_request_error(self, mock_post):
        import requests

        mock_post.side_effect = requests.RequestException(
            "Connection failed"
        )

        result = send_telegram_message("Test Telegram message")

        self.assertFalse(result)
