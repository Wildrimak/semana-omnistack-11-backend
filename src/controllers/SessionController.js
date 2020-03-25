const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        
        const { id } = request.body; //pq nesse sistema o login só é feito a partir da id da ong;

        const ong =  await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({error: 'No ONG found with this ID'});
        }

        return response.json(ong);

    }

}