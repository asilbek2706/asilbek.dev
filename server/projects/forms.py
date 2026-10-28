from django import forms

from .models import Project


class ProjectAdminForm(forms.ModelForm):
    technologies = forms.CharField(
        required=False,
        widget=forms.Textarea(
            attrs={
                "rows": 4,
                "placeholder": "Java, Next.js, Django, React",
            }
        ),
        help_text="Texnologiyalarni vergul yoki yangi qatordan ajrating.",
    )

    class Meta:
        model = Project
        fields = "__all__"

    def clean_technologies(self):
        value = self.cleaned_data.get("technologies", "")

        technologies = [
            item.strip()
            for item in value.replace("\n", ",").split(",")
            if item.strip()
        ]

        return technologies
