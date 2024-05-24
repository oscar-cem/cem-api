const getUsers = (req, res) => {
    res.json({
        ok: true,
        msg:'Hola',
        users: [
            {name:'Oscar', surname:'Ortiz'},
            {name:'Gabriel', surname:'Garcia'},
        ]
    })
}


const addUsers = (req, res) => {
    console.log('req::');
    console.log(req.body);
    res.json({
        ok: true,
        msg:'Usuario creado'
    })
}

module.exports = {
    getUsers,
    addUsers
}