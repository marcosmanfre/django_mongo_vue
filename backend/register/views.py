from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse


from register.models import Secao, Jovem
from register.serializers import SecaoSerializer, JovemSerializer
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
        secao=Secao.objects.get( secao_id=secao_data['secao_id'])
        secao_serializer=SecaoSerializer(secao,data=secao_data)
        if secao_serializer.is_valid():
            secao_serializer.save()
            return JsonResponse("Atualizado com sucesso",safe=False)
        return JsonResponse("Erro ao atualizar")
    
    elif request.method=='DELETE':
        secao=Secao.objects.get(secao_id=id)
        secao.delete()
        return JsonResponse("Deletado com sucesso",safe=False)


@csrf_exempt
def jovemApi(request,id=0):
    if request.method=='GET':
        jovem = Jovem.objects.all()
        jovem_serializer=JovemSerializer(jovem,many=True)
        return JsonResponse(jovem_serializer.data,safe=False)
    
        
    elif request.method=='POST':
        jovem_data=JSONParser().parse(request)
        jovem_serializer=JovemSerializer(data=jovem_data)
        if jovem_serializer.is_valid():
            jovem_serializer.save()
            return JsonResponse("Adicionado com sucesso",safe=False)
        return JsonResponse("Erro ao adicionar",safe=False)
    

    elif request.method=='PUT':
        jovem_data=JSONParser().parse(request)
        jovem=Jovem.objects.get( jovem_id=jovem_data['jovem_id'])
        jovem_serializer=JovemSerializer(jovem,data=jovem_data)
        if jovem_serializer.is_valid():
            jovem_serializer.save()
            return JsonResponse("Atualizado com sucesso",safe=False)
        return JsonResponse("Erro ao atualizar")
    
    elif request.method=='DELETE':
        jovem=Jovem.objects.get(jovem_id=id)
        jovem.delete()
        return JsonResponse("Deletado com sucesso",safe=False)
