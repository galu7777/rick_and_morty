const users = require('../utils/users');
const { User } = require('../DB_connection');

const login = (req, res) => {
    const {email, password} = req.query;
    try {
        const userFound = users.find(user => user.email === email && user.password === password);

        // return userFound
        // ? res.status(200).json({access: true})
        // : res.status(200).json({access: false})
        if(userFound) return res.status(200).json({access: true});
        return res.status(200).json({access: false});
    } catch (error) {
        return res.status(200).send(error.message)
    }    
}

const register = async(req, res) => {
    const {id, email, password} = req.body;
    try {        
        if(!email || !password) return res.status(200).send({message: "error"});
        const user = await User.create({id, email, password});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = {
    login,
    register
};