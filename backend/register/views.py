from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from register.models import Secao
from register.serializers import SecaoSerializer

from django.core.files.storage import default_storage


@csrf_exempt
def secaoApi(request,id=0):
    if request.method=='GET':
        secao = Secao.objects.all()
        secao_serializer=SecaoSerializer(secao,many=True)
        return JsonResponse(secao_serializer.data,safe=False)
    
    elif request.method=='POST':
        secao_data=JSONParser().parse(request)
        secao_serializer=SecaoSerializer(data=secao_data)
        if secao_serializer.is_valid():
            secao_serializer.save()
            return JsonResponse("Adicionado com sucesso",safe=False)
        return JsonResponse("Erro ao adicionar",safe=False)
    
    elif request.method=='PUT':
        secao_data=JSONParser().parse(request)
        secao=Secao.objects.get( secao_id=secao_data[' secao_id'])
        secao_serializer=SecaoSerializer(secao,data=secao_data)
        if secao_serializer.is_valid():
            secao_serializer.save()
            return JsonResponse("Atualizado com sucesso",safe=False)
        return JsonResponse("Erro ao atualizar")
    
    elif request.method=='DELETE':
        secao=Secao.objects.get(secao_id=id)
        secao.delete()
        return JsonResponse("Deletado com sucesso",safe=False)
