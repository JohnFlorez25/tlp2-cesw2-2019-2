const express = require('express');
const app = express();

const { config } =require('./config/index');
const moviesApi = require('./routes/movies');

//midleware para definir como traemos el cuerpo
app.use(express.json());

//es una funcion debemos ejecutarla y le pasamos nuestra funcion de express
moviesApi(app);

app.listen(config.port, function(){
    console.log(`Escuchando en el puerto http://localhost:${config.port}`);
});

