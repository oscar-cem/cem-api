const User = require('../models/user')

const getUsers = async (req, res) => {

    const users = await User.find({}, 'name');


    res.json({
        ok: true,
        msg:'Hola',
        users
    })
}


const addUsers = async (req, res) => {
    const user = new User(req.body);
    await user.save();

    res.json({
        ok: true,
        msg:'Usuario creado',
        user
    })
}

module.exports = {
    getUsers,
    addUsers
}