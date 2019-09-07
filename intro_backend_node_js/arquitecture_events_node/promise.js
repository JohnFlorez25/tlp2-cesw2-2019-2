//Existe otra forma en que podemos realizar esto, es por medio de
//las promesas donde recibe resolve (para resolver la promesa) y 
//reject que se encarga de rechazarla
const promise = new Promise((resolve, reject) => {
    //nos deshacemos del callback, en vez de retornar un callback
    //llamamos a resolve y a reject
    setTimeout(() => {
        if (Math.random() < 0.5) {
            //como resolve ya no es callback, no hay necesidad de pasar
            //el objeto null porque recibe directamente mi mensaje
            resolve('hello word')
        } else {
            reject(new Error('Hello Error'))
        }
    }, 2000)
})

//Lo interesante de las promesas es que se pueden encadenar
promise.then(msg => msg.toUpperCase())
    .then(msg => console.log('message', msg))
    //es importante capturar el error en caso de que suceda esto se hace con
    //la palabra reservada catch
    .catch(err => console.log('error', err))