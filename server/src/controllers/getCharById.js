const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';


const getCharById = async(req, res) => {
    const { id } = req.params;
    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, gender, origin, image}) => {
        if(name){
            const character = {
                id,
                name,
                species,
                gender,
                origin,
                image,
                status
            };

            return res.status(200).json(character);
        };

        return res.status(404).send('Not Found')
    })
    .catch(error => res.status(500).send(error.message));
};


module.exports = {
    getCharById
};