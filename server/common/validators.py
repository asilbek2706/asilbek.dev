from pathlib import Path

from django.core.exceptions import ValidationError
from PIL import Image


MAX_IMAGE_SIZE = 5 * 1024 * 1024  # 5 MB
ALLOWED_IMAGE_FORMATS = {"JPEG", "PNG", "WEBP"}
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def validate_image_file(file):
    if not file:
        return

    if file.size > MAX_IMAGE_SIZE:
        raise ValidationError("Image size must not exceed 5 MB.")

    extension = Path(file.name).suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise ValidationError(
            "Only JPG, JPEG, PNG, and WEBP images are allowed."
        )

    try:
        image = Image.open(file)
        image.verify()
    except Exception as exc:
        raise ValidationError("Invalid image file.") from exc

    try:
        image_format = Image.open(file).format
    except Exception as exc:
        raise ValidationError("Could not verify image format.") from exc

    if image_format not in ALLOWED_IMAGE_FORMATS:
        raise ValidationError("Unsupported image format.")

    file.seek(0)
