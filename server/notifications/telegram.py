import logging

import requests
from django.conf import settings

logger = logging.getLogger(__name__)


def send_telegram_message(message: str) -> bool:
    token = getattr(settings, "TELEGRAM_BOT_TOKEN", "")
    chat_id = getattr(settings, "TELEGRAM_CHAT_ID", "")

    if not token or not chat_id:
        logger.warning("Telegram notification is not configured.")
        return False

    url = f"https://api.telegram.org/bot{token}/sendMessage"

    try:
        response = requests.post(
            url,
            json={
                "chat_id": chat_id,
                "text": message,
            },
            timeout=10,
        )
        response.raise_for_status()

        data = response.json()

        if not data.get("ok"):
            logger.error(
                "Telegram API error: %s",
                data.get("description", "Unknown error"),
            )
            return False

        return True

    except (requests.RequestException, ValueError):
        logger.exception("Failed to send Telegram notification.")
        return False
