import json
from urllib.error import URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen

from django.conf import settings


class RecaptchaUnavailable(Exception):
    pass


def verify_recaptcha(token, expected_action="contact_form"):
    secret_key = getattr(settings, "RECAPTCHA_SECRET_KEY", "")

    if not secret_key:
        raise RecaptchaUnavailable("reCAPTCHA is not configured.")

    if not token or not isinstance(token, str):
        return False

    payload = urlencode({
        "secret": secret_key,
        "response": token,
    }).encode("utf-8")

    request = Request(
        "https://www.google.com/recaptcha/api/siteverify",
        data=payload,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
        method="POST",
    )

    try:
        with urlopen(request, timeout=5) as response:
            result = json.loads(response.read().decode("utf-8"))
    except (URLError, TimeoutError, OSError, ValueError) as exc:
        raise RecaptchaUnavailable("Could not verify reCAPTCHA.") from exc

    try:
        minimum_score = float(settings.RECAPTCHA_MIN_SCORE)
    except (AttributeError, TypeError, ValueError):
        minimum_score = 0.5

    return (
        result.get("success") is True
        and result.get("action") == expected_action
        and isinstance(result.get("score"), (int, float))
        and result["score"] >= minimum_score
    )
