const express = require("express");
const cors = require("cors");
const app = express();
//Incluir a controller
const messages = require("./controllers/messages");
app.use(express.json());
//Testar a conexão com o BD
//const db = require("./db/models");
//Criar middleware para permitir requisição externa
app.use((req, res, next) =>{
    //Qualquer endereço pode fazer requisição
    res.header("Access-Control-Allow-Origin", "*");
    //Tipos de métodos que a Api Ceita
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    //Permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type");
    //Executar o cors
    app.use((cors));
    //Quando não houver erro deve continuar o processamento
    next();
});
//Criar as rotas
app.use('/message', messages);

app.listen();
app.listen(8080, () => {			//Iniciando o servidor
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});	