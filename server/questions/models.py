from django.db import models


class Question(models.Model):
    contact_message = models.OneToOneField(
        "contact.ContactMessage",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="public_question",
    )
    question = models.CharField(max_length=255)
    answer = models.TextField()
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "-id"]

    def __str__(self):
        return self.question
