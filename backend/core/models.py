from django.db import models

class EnergyInsight(models.Model):
    end_year = models.CharField(max_length=20, null=True, blank=True)
    intensity = models.IntegerField(null=True, blank=True)
    sector = models.CharField(max_length=100, null=True, blank=True)
    topic = models.CharField(max_length=100, null=True, blank=True)
    insight = models.TextField(null=True, blank=True)
    url = models.URLField(max_length=1000, null=True, blank=True)
    region = models.CharField(max_length=100, null=True, blank=True)
    start_year = models.CharField(max_length=10, null=True, blank=True)
    impact = models.CharField(max_length=100, null=True, blank=True)
    added = models.CharField(max_length=50,null=True, blank=True)
    published = models.CharField(max_length=50,null=True, blank=True)
    country = models.CharField(max_length=100, null=True, blank=True)
    relevance = models.IntegerField(null=True, blank=True)
    pestle = models.CharField(max_length=100, null=True, blank=True)
    source = models.CharField(max_length=255, null=True, blank=True)
    title = models.TextField(null=True, blank=True)
    likelihood = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'EnergyInsight'  # This is optional, to match your table name exactly
