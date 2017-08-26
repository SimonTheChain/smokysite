from django import forms


class SpeedForm(forms.Form):
    distance = forms.IntegerField(min_value=1, help_text="The distance travelled")
    duration = forms.IntegerField(min_value=1, help_text="The duration taken to travel the distance")