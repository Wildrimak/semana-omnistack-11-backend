const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

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


module.exports = {

    async index(request, response) {

        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    
    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp, 
            city, 
            uf,
        });

    return response.json({ id });

  }
}