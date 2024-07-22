from  rest_framework import serializers
from .models import EnergyInsight


class EnergyInsightSerializer(serializers.ModelSerializer) :
    class Meta :
        model = EnergyInsight
        fields = ['id','end_year','intensity','sector','topic','insight','url','region',
                  'start_year','impact','added','published','country','relevance','pestle','source','title','likelihood']