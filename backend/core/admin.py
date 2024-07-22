
# Register your models here.

from .models import EnergyInsight
from django.contrib import admin

class EnergyInsightAdmin(admin.ModelAdmin):
    pass


admin.site.register(EnergyInsight, EnergyInsightAdmin)
