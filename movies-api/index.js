const express = require('express');
const app = express();

const { config } =require('./config/index');

app.get('/', function(req, res) {
    res.send("Hello Poli World!!!")
});

app.get('/json', function(req, res) {
    res.json({hello: 'poli'})
});

app.listen(config.port, function(){
    console.log(`Escuchando en el puerto http://localhost:${config.port}`);
});

