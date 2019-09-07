//Recordemos que un callback no es nada más que un parámetro,
//que se va a ejecutar como una función más adelante
const asynCallback = function (cb) {
    //utilizamos un set time out para que esto sea asincrono
    //se agrega la función a ejecutar y el tiempo de ejecución
    setTimeout(() => {
        //creamos función random donde el 50% va a fallar
        //en nodeJS es muy común el concepto ERROR FIRST CALLBACK
        //cuando hay un error lo primero que voy a enviar es el error
        if (Math.random() < 0.5) {
            return cb(null, 'hello word')
        } else {
            cb(new Error('Hello Error'))
        }
    }, 2000)
};

//Vamos a ejecutar nuestro callback asincrono
asynCallback((err, msg) => {
    //verificamos primero si existe el error
    if (err) {
        console.log('error', err);
    } else {
        console.log('message', msg);
    }
})
