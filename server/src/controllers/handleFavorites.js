const {User, Favorite} = require('../DB_connection');



const postFav = async(req, res) => {
    const {
        userId,
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
    } = req.body;

    const character = {
        userId,
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
    };
    
    try {
        //myFavorites.push(character)
        const char = await Favorite.create(character);
        if(userId){

            const user = await User.findByPk(userId)
            if(user){
                //************************/
                //AQUI SE CREA LA RELACION
                await user.addFavorite(char);
            }
        }
        const favorites = await Favorite.findAll();
        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(404).send({ message: error.message })
    }
}

const deleteFav = async (req, res) => {
    const {id} = req.params;

   try {
         //myFavorites = myFavorites.filter((favorite)=> favorite.id !== Numver(id));
        const char = await Favorite.findByPk(id)
        if(char){
            await Favorite.destroy({
                where: {
                    id,
                 }
            })
        }
        const favorites = await Favorite.findAll();
        return res.status(200).json(favorites);
   } catch (error) {
        return res.status(404).send(error.message)
   }

}

module.exports = {
    postFav,
    deleteFav
}