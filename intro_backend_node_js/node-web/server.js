//requerimos nuestro modulo http modulo nativo de http
const http = require('http');
const server = http.createServer();
//El servidor funciona con EVENTOS
//el evento request recibe una función que tiene como parametros
//un request object y un response object
server.on('request', (req, res) => {
    //definimos código de respuesta
    res.statusCode = 200;
    //definir en el header que tipo de respuesta dar
    //en este caso la respuesta es de texto plano
    res.setHeader('Content-Type', 'text/plain');
    //ejecutar res para responderle al cliente
    res.end('hello word\n');
});

//definimos el lugar por donde deseo que mi puerto escuche
server.listen(5789);
//quiero saber cuando se ejecuta
console.log('Servidor en la url http://localhost:5789');