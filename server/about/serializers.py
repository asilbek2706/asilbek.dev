from rest_framework import serializers

from .models import About


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = [
            "id",
            "firstname",
            "lastname",
            "image",
            "about_text",
            "phone_number",
            "email",
            "github_link",
            "telegram_link",
            "instagram_link",
        ]
