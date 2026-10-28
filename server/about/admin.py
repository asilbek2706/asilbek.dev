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
