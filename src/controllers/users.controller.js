const bcryptjs = require('bcryptjs');
const User = require('../models/user.model')
const response = require('express');


const getUsers = async (req, res) => {

    const users = await User.find({}, 'name email password');
    res.json({
        ok: true,
        msg:'Hola',
        users
    })
}


const addUsers = async (req, res = response) => {
    
    try {
        console.log(req.body);
        const {email, password} = req.body;
        const user = new User(req.body);
        const existEmail = await User.findOne({email})

        if (existEmail) {
            return res.status(400).json({
                ok:false,
                msg:'Se duplico el correo'
            })
        }

        // Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync( password, salt );

        await user.save();
        res.json({
            ok: true,
            msg:'Usuario creado',
            user
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'error inesperado'
        })
    }    
}

module.exports = {
    getUsers,
    addUsers
}