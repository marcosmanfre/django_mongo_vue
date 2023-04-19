from rest_framework import serializers
from register.models import Secao


class SecaoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Secao
        fields=('secao_id', 'secao_nome', 'secao_chefe')

#class JovemSerializer(serializers.ModelSerializer):
 #   class Meta:
   #     model=Jovem
   #     fields=('jovem_id', 'registro', 'nome', 'secao', 'promessa', 'data_nascimento', 'valor_mensalidade')


#class ColaboradorSerializer(serializers.ModelSerializer):
   # class Meta:
   #     model=Colaborador
    #    fields=('colab_id', 'registro', 'nome', 'secao', 'data_nascimento', 'funcao', 'reuniao')