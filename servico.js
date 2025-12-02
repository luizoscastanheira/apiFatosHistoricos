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
let fato = listarFatoPorAno(1914)
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


export {listarColecaoCompleta, listarFatoPorAno, validarAno}
