from django.db import models

from common.validators import validate_image_file


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(
        upload_to="projects/",
        blank=True,
        null=True,
        validators=[validate_image_file],
    )
    github_link = models.URLField(blank=True)
    demo_link = models.URLField(blank=True)
    technologies = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
