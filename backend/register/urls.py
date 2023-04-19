from register import views

from django.urls import re_path as url

from django.conf import settings

urlpatterns=[
    url(r'secao$',views.secaoApi),
    url(r'secao/([0-9]+)$',views.secaoApi),

  #  url(r'^jovem$',views.jovemApi),
  #  url(r'^jovem/([0-9]+)$',views.jovemApi),

   # url(r'^colaborador$',views.colaboradorApi),
  #  url(r'^colaborador/([0-9]+)$',views.colaboradorApi),

 
]