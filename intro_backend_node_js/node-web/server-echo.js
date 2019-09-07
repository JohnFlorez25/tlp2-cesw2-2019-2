//1.Creando servidor que va a servir como un echo, va a recibir
//datos y me los va a imprimir directamente
//2.Para que en realidad sea un servidor echo debemos recibir
//mensajes y retornar ese mensaje como respuesta.
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    //el objeto req tiene como parametro un metodo
    //Probar primero en POSTMAN
    if(req.method === 'POST' && req.url == "/echo"){
        //2.agregamos la variable body
        let body = [];
        //reciben pequeños pedazos de datos cuando son una 
        //gran cantidad de datos
        req.on("data", chunk => {
            body.push(chunk);
        })
        .on('end', () =>{
            res.writeHeader(200, {'Content-Type' : 'text/plain'});
            //normalmente esto viene de tipo buffer por lo cual
            //debemos convertide Stream a String
            body = Buffer.concat(body).toString();
            res.end(body);
        })     
    }else{
        res.statusCode = 404;
        res.end()
    }
    
});

server.listen(5789);
console.log('Servidor en la url http://localhost:5789');