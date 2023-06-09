# Generated by Django 4.1.8 on 2023-04-19 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('register', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Jovem',
            fields=[
                ('jovem_id', models.AutoField(primary_key=True, serialize=False)),
                ('registro', models.CharField(max_length=20)),
                ('nome', models.CharField(max_length=255)),
                ('secao', models.CharField(max_length=100)),
                ('promessa', models.BooleanField(null=True)),
                ('data_nascimento', models.DateField()),
                ('valor_mensalidade', models.IntegerField()),
            ],
        ),
    ]
