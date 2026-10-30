from celery import shared_task


@shared_task
def health_check_task():
    """Verify that the Celery worker can execute a task."""
    return "Celery is working"


@shared_task(bind=True, max_retries=3)
def send_telegram_notification(self, message: str):
    """Send a Telegram notification with bounded retries on failure."""
    from notifications.telegram import send_telegram_message

    success = send_telegram_message(message)

    if not success:
        countdown = 30 * (2 ** self.request.retries)
        raise self.retry(
            exc=RuntimeError("Telegram notification failed"),
            countdown=countdown,
        )

    return True
