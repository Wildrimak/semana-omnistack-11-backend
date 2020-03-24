const express = require('express');

const routes = express.Router();

/**
 * Metodos HTTP: GET, POST, PUT, DELETE
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/users', (request, response) => {
  
    const params = request.query; //Obtem os parametros da request
    const id = request.params; // Obtem os routes params;
    const body = request.body; // Obtem o corpo da request;
  
    console.log(params);
    console.log(id);
    console.log(body);
    
    return response.json({
        evento: "Semana Omnistack 11",
        aluno: "Super Wildrimak"
    });
});

//Assim que se exporta variaveis de dentro de um arquivo usando o node;
module.exports = routes;