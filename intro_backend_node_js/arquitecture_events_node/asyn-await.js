//Lo que busca asyn-await es que nuestra función devuelva una promesa
const promiseFunction = ()=> new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('hello word')
        } else {
            reject(new Error('Hello Error'))
        }
    }, 2000)
})

//la forma de ejecutarlo es por medio de una función asincrona,
//async nombre de la función, a diferencia de las promesas que usamos
//.catch o .then, nosotros como hacemos código que es asincrono usamos try-catch
async function asyncAwait(){
    try{
        const msg = await promiseFunction();
        console.log('message', msg)
    }catch(err){
        console.log('err', err);
    }
}

//ejecutar la función asíncrona
asyncAwait();