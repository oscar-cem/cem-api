const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors')

const app = express();
app.use( cors() );
dbConnection();

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg:'Hola'
    })
})

app.listen(process.env.PORT, ()=> {
    console.log('hola puerto ' +process.env.PORT);
} )