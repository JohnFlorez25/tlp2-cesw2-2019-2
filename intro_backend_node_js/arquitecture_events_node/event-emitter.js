//necesitmaos hacer uso de la clase EventEmitter de un modulo
//nativo de node
const EventEmitter = require('events');
//creamos una clase Logger, esto es bien interesante porque con el event-emitter
//podemos crear un logger propio y así abstraer como ejecutamos nuestro login en nuestro código.
class Logger extends EventEmitter{
    execute(cb) {
        console.log('Before');
        //Emitimos un evento
        this.emit('start');
        cb();
        this.emit('finish')
        console.log('After')
    }
}

const logger = new Logger();
//parte importante de los eventos es logger.on podemos decir que cada vez que ocurra
//el evento start haga algo.
logger.on('start', () => console.log('Starting'));
//Acá vemos la ventaja sobre los otros métodos porque yo puedo realmente suscribirme
//al evento multiples veces sin restricciones, si yo quisiera varias suscribciones debo crear más codigo
logger.on('finish', () => console.log('Finishing'));
logger.on('finish', () => console.log('Finishing'));
//ejecutando nuestro logger
//logger.execute(() => console.log('Hello word'));
//tener en cuenta que si ejecuto código asincrono el orden no permanece, para poder controlarlo
//usamos callbacks
logger.execute(() => setTimeout(() =>console.log('Hello word'), 500));
