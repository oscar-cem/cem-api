const response = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.model')

const login = async (req, res = response) => {

    const {email, password} = req.body;


    try {
        const userDB = await User.findOne({ email });

        if (!userDB) {
            return res.status(404).json({
                ok:false,
                msg:'email no encontrado'
            })
        }

        const validPassword = bcryptjs.compareSync( password, userDB.password );

        if (!validPassword) {
            return res.status(400).json({
                ok:false,
                msg:'contraseña no encontrada'
            })
        }

        // GENERA JWT

        res.json({
            ok: true,
            msg:'Hola mundo'
        })
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    login
}