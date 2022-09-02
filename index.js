const express = require("express"); // metodo http nao vai ficar explicito pq vai usar o express
const listUF = require("./Database/estados.json");
const server = express(); // é como se o express estivesse fazendo o "createServer" mas de uma forma melhor


server.get("/", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.json(listUF); //especificar que o arquivo é em JSON
});

server.listen(7000, () => { 
    console.log("RODANDO")
});