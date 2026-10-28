from django.db import models


class About(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    image = models.ImageField(upload_to="about/", blank=True, null=True)
    about_text = models.TextField()
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
