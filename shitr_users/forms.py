# shitr_users/forms.py
from django import forms
from .models import ShitrUser

class ShitrUserCreationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = ShitrUser
        fields = ['email', 'username', 'password']

    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user.save()
        return user