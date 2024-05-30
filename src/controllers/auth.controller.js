const response = require('express');


const login = async (req, res) => {

    res.json({
        ok: true,
        msg:'Hola mundo'
    })
}

module.exports = {
    login
}