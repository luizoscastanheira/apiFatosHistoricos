# apiFatosHistoricos
--
Esta API lista fatos históricos desde 1914 até 2025 (por enquanto).

## A mesma possui três endpoints:

- Um endpoint que lista a coleção inteira e pode ser acessado em:
http://localhost:8080

- Um endpoint que lista um fato de forma aleatoria:
http://localhost:8080/random

- Um endpoint que lista um fato baseado no ano fornecido na url:
http://localhost:8080/:{ano} que seria por exemplo http://localhost:8080/2000

A resposta será sempre um json, uma coleção de objetos completa no caso do endpoint que lista a coleção ou apenas um objeto no caso dos outros dois endpoints.

O formato é conhecido e cada objeto segue o formato {"Ano":"2000", "Fato":"bla bla bla"}

## Arquivos
A API é composta por três arquivos:
- dadosFatos.js - Contêm uma coleção de objetos que constituem cada fato histórico.
- servico.js - Contêm as funções que percorrem e selecionam dados da coleção.
- server.js - É a camada REST da nossa API e contém os endpoints.

## Documentação e comentários
O código da API é bem comentado, até os códigos usados que para testar as funções foram mantidos pois podem ser úteis a quem quiser copiar API.
