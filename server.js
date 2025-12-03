// Esta é Camada API REST

// Importando camada camada de Serviço
import {listarColecaoCompleta, listarFatoPorAno, validarAno, gerarAnoAleatorio} from "./servico.js";

// Criando um função de Data - Isso é opcional
let data = new Date();

// Primeiro - Criando o acesso ao Express
import express from "express";
const server = express();

import cors from "cors";
server.use(cors());

// Segundo - Criando os endpoints

// 1- EndPoint que retorna toda a coleçao
server.get("/", (req, res) =>{
    let resposta = listarColecaoCompleta()
    res.json(resposta)
});

//  - EndPoint que retorna um fato de forma aleatória
server.get("/random", (req, res) => {
    let anoAleatorio = gerarAnoAleatorio();
    let fatoAleatorio = listarFatoPorAno(anoAleatorio);

    res.json(fatoAleatorio);
});


//  - EndPoint que retorna um ano especificado na url
server.get("/:ano",(req, res)=>{
    let ano = req.params.ano;

     if(validarAno(ano))
         {
             let fato = listarFatoPorAno(ano);
             res.json(fato);
         }
         else
         {
             res.status(400).json({erro:'Parâmetro ano inválido'});
         }

});




// Terceiro - abrindo uma porta de escuta
server.listen(8080, ()=>{
    console.log("O servidor entrou online em: " + data);
});