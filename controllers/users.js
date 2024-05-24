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

module.exports = {
    getUsers
}