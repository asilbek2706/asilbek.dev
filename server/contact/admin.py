from django.contrib import admin

from questions.models import Question

from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "email",
        "subject",
        "answer_status",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "subject",
        "message",
        "answer",
    )

    ordering = (
        "-created_at",
    )

    fieldsets = (
        (
            "Xabar",
            {
                "fields": (
                    "name",
                    "email",
                    "subject",
                    "message",
                    "created_at",
                )
            },
        ),
        (
            "Javob",
            {
                "fields": (
                    "answer",
                )
            },
        ),
    )

    readonly_fields = (
        "created_at",
    )

    @admin.display(description="Javob")
    def answer_status(self, obj):
        return "Javob berilgan" if obj.answer.strip() else "Javob kutilmoqda"

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)

        answer = obj.answer.strip()

        if answer:
            Question.objects.update_or_create(
                contact_message=obj,
                defaults={
                    "question": obj.message,
                    "answer": answer,
                    "order": 0,
                    "is_active": True,
                },
            )
        else:
            Question.objects.filter(
                contact_message=obj,
            ).update(
                is_active=False,
            )
