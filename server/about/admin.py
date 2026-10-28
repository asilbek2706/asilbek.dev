from django.contrib import admin

from .models import About


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = (
        "firstname",
        "lastname",
        "email",
        "phone_number",
    )

    fieldsets = (
        (
            "Asosiy ma'lumotlar",
            {
                "fields": (
                    "firstname",
                    "lastname",
                    "image",
                    "about_text",
                )
            },
        ),
        (
            "Hero",
            {
                "fields": (
                    "hero_badge",
                    "hero_university",
                    "hero_description",
                    "hero_role",
                    "hero_primary_button",
                    "hero_secondary_button",
                )
            },
        ),
        (
            "Aloqa",
            {
                "fields": (
                    "phone_number",
                    "email",
                    "github_link",
                    "telegram_link",
                    "instagram_link",
                )
            },
        ),
    )
