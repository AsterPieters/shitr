# shitr_users/forms.py
from django import forms
from .models import CustomUser

class CustomUserCreationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password']

    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user.save()
        return user