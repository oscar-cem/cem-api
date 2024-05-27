const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors')

const app = express();
app.use( cors() );
dbConnection();

app.use(express.json());

app.use('/api/users', require('./routes/users.routes'));

app.listen(process.env.PORT, ()=> {
    console.log('hola puerto ' +process.env.PORT);
} )