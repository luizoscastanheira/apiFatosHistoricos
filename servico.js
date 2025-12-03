// Camada de Serviço - Contém as funções do app

// Importando a camada de dados

import { fatosHistoricos } from './dadosFatos.js';

// Função para retornar todos os anos - OK
function listarColecaoCompleta(){
     return fatosHistoricos;
}
// abaixo é só um teste
//console.log(listarColecaoCompleta())
//let colecao = listarColecaoCompleta(); // atribui à variavel colecao todo o conteudo do array
//console.log(colecao) // retorna a colecao inteira em um array de objetos
//console.log(colecao[0]) // retorna o primeiro o objeto/item do array
//console.log(colecao[0].Ano) // retorna apanas a propriedade Ano do objeto na posição 0 do array.

// Função retorna ano
function listarFatoPorAno(ano){
    let fatoSelecionado = fatosHistoricos.find(fato => {
        return fato.Ano == ano;
    });

    return fatoSelecionado;
};

// abaixo é só um teste
//let fato = listarFatoPorAno(1914)
//console.log(fato.Ano)
//console.log(fato.Fato)

// Função que valida o ano
function validarAno(ano){
    if(isNaN(ano)){
        return false;
    }else{
        if(ano >= 1914 && ano <= 2025){
            return true;
        }else{
            return false;
        }
    }
}

// função de aleatoriedade
function gerarAnoAleatorio() {
    // Definindo o intervalo (inclusivo)
    const min = 1914;
    const max = 2025;

    // Calcula a diferença entre o máximo e o mínimo + 1
    // (2022 - 1914 + 1 = 109)
    const range = max - min + 1;

    // 1. Math.random() gera um número entre [0, 1)
    // 2. Multiplica por 'range' para ter um número entre [0, 109)
    // 3. Math.floor() arredonda para o número inteiro mais próximo (0 a 108)
    // 4. Adiciona 'min' (1914) para deslocar o intervalo para [1914, 2025]
    const ano = Math.floor(Math.random() * range) + min;

    return ano;
}
// teste da função
//const anoSorteado = gerarAnoAleatorio();
//console.log(anoSorteado); // Exemplo: 1985


export {listarColecaoCompleta, listarFatoPorAno, validarAno, gerarAnoAleatorio}
