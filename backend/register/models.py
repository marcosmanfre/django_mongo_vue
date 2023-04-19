from djongo import models


class Secao(models.Model):
    secao_id = models.AutoField(primary_key=True)
    secao_nome = models.CharField(max_length=100)


class Jovem(models.Model):
    jovem_id = models.AutoField(primary_key=True)
    registro = models.CharField(max_length=20)
    nome = models.CharField(max_length=255)
    secao = models.CharField(max_length=100)
    promessa = models.BooleanField(null=True)
    data_nascimento = models.DateField()
    valor_mensalidade = models.IntegerField()


#class Colaborador(models.Model):    
  #  colab_id = models.AutoField(primary_key=True)
  #  registro = models.CharField(max_length=20)
 #   nome = models.CharField(max_length=255)
 ##   secao = models.CharField(max_length=100)
 #   data_nascimento = models.DateField()
  ##  funcao = models.CharField(max_length=255)
  #  reuniao = models.BooleanField()
