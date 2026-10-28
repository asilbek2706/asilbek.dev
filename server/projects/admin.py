from django.contrib import admin

from .forms import ProjectAdminForm
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    form = ProjectAdminForm

    list_display = (
        "title",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
    )

    ordering = (
        "-created_at",
    )
