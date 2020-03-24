const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

/**
 * Metodos HTTP: GET, POST, PUT, DELETE
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * const params = request.query; //Obtem os parametros da request
 * const id = request.params; // Obtem os routes params;
 * const body = request.body; // Obtem o corpo da request;
 *  
 */


routes.get('/ongs', async (request, response) => {

    const ongs = await connection('ongs').select('*');
    return response.json(ongs);

});

routes.post('/ongs', async (request, response) => {
  
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp, 
        city, 
        uf,
    });
    return response.json({ id });
});

//Assim que se exporta variaveis de dentro de um arquivo usando o node;
module.exports = routes;