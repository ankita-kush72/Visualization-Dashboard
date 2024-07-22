from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
from django.db import transaction
from .models import EnergyInsight
from .serializers import EnergyInsightSerializer
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse



file_path = "./jsondata.json"


@api_view(['GET'])
def load_data(request):
  try :
    with open(file_path, 'r', encoding='utf-8') as file:
      json_data = json.load(file)
      EnergyInsight.objects.all().delete()
      with transaction.atomic():
        for dict_data in json_data:
          energyInsight = EnergyInsight(
            end_year=dict_data['end_year'],
            intensity=dict_data['intensity'] if dict_data['intensity'] != '' else 0,
            sector=dict_data['sector'],
            topic=dict_data['topic'],
            insight=dict_data['insight'],
            url=dict_data['url'],
            region=dict_data['region'],
            start_year=dict_data['start_year'],
            impact=dict_data['impact'],
            added=dict_data['added'],
            published=dict_data['published'],
            country=dict_data['country'],
            relevance=dict_data['relevance'] if dict_data['relevance'] != '' else 0,
            pestle=dict_data['pestle'],
            source=dict_data['source'],
            title=dict_data['title'],
            likelihood=dict_data['likelihood'] if dict_data['likelihood'] != '' else 0,
          )

          energyInsight.save()


      return Response({'message':"data inserted"},status=200)
  except Exception as e:
    return Response({"exception": str(e)}, status=500)


@api_view(['GET'])
def get_data(request):
    try:
        datapoints = EnergyInsight.objects.all()
        serializer = EnergyInsightSerializer(datapoints,many=True)
        return Response(serializer.data)

    except Exception as e:
        return JsonResponse({"exception": str(e)}, status=500)





