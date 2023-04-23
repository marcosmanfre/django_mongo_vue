from rest_framework import serializers
from register.models import Secao, Jovem


class SecaoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Secao
        fields=('secao_id', 'secao_nome')

class JovemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Jovem
        fields=('jovem_id', 'registro', 'nome', 'secao', 'promessa', 'data_nascimento', 'valor_mensalidade')
