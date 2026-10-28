from django.db import models

from common.validators import validate_image_file


class About(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    image = models.ImageField(
        upload_to="about/",
        blank=True,
        null=True,
        validators=[validate_image_file],
    )
    about_text = models.TextField()

    hero_badge = models.CharField(
        max_length=150,
        default="Ready for new challenges",
    )
    hero_university = models.CharField(
        max_length=150,
        default="Acharya University",
    )
    hero_description = models.TextField(
        default="murakkab tizimlar yaratishga ishtiyoqmand",
    )
    hero_role = models.CharField(
        max_length=150,
        default="Full-stack muhandisiman.",
    )
    hero_primary_button = models.CharField(
        max_length=100,
        default="Loyihani boshlaymiz",
    )
    hero_secondary_button = models.CharField(
        max_length=100,
        default="Proyektlarim",
    )

    phone_number = models.CharField(max_length=30, blank=True)
    email = models.EmailField()
    github_link = models.URLField(blank=True)
    telegram_link = models.URLField(blank=True)
    instagram_link = models.URLField(blank=True)

    class Meta:
        verbose_name = "About"
        verbose_name_plural = "About"

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
