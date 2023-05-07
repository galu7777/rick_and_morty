const {User, Favorite} = require('../DB_connection');



const postFav = async(req, res) => {
    const character = req.body
    try {
        //myFavorites.push(character)
        const char = await Favorite.create(character);
        const favorites = await Favorite.findAll();
        return res.status(200).json(favorites);
    } catch (error) {
        return res.status(404).send({ message: error })
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
                    id: id
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