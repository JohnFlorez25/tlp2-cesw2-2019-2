# Introducción a NodeJS

Node.js es un entorno de ejecución para JavaScript construido con el motor JavaScript V8 de Chrome. JavaScript es un lenguaje interpretado pero en Node.js tenemos algo llamado el JIT (Just In Time) Compiler que es una especie de monitor que optimiza fragmentos de código que son ejecutados frecuentemente, así es que convierte JavaScript de ser interpretado a compilado.

Respondiendo una serie de preguntas continuas podríamos facilmente llegar a la definición de NodeJs asi:

**¿Qué es node.js?**

Node.js es un entorno de ejecucion para javascript, construido con el motor v8 _(lo que hace es compilar JavaScript a código máquina)_

**¿Qué es un entorno de ejecución?**

Un entorno de ejecucion es una capa encima del sistema operativo que ejecuta una pieza de software.

Saber como consumir la memoria, como acceder a las variables y cada cuanto corre el **garbage collector**

**¿Qué nos permite?**

Usar javascript para el servidor.

**Diferencias entre Javascript y NodeJs**

En JavaScript del lado del cliente tenemos el DOM y el CSSDOM así como el objeto window para manipular los elementos de nuestra página además una serie de APIs, aquí unos ejemplos:

- fetch
- SessionStorage y LocalStorage
- canvas
- bluetooth
- audio
- web authentication

Mientras que en Node.js no tenemos un DOM ni un objeto windows, lo que sí tenemos son una serie de módulos que nos permiten interactuar con los recursos de la máquina como el sistema operativo y el sistema de archivos, por ejemplo:

- Módulo para comunicarse con el sistema operativo **os**
- fs
- Módulo de HTTP para crear servidores **http**
- Módulo de utilidades **util**
- Módulo de debugger **debugger**
- Módulo de manejo de streams **stream**
- Módulo de manejo de eventos **events**

**¿Quieres saber más?**
- [Historia de Node Js](https://blog.risingstack.com/history-of-node-js/)
- [Compiladores JIT](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/)
- [JavaScript Engine](https://en.wikipedia.org/wiki/JavaScript_engine)
- [Documentación NodeJS API](https://nodejs.org/api/)
- [Web API](https://developer.mozilla.org/en-US/docs/Web/API)
- [Arquitectura orientada a eventos](https://nodejs.org/api/events.html#events_events)
- [Generalidades del Protocolo HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)


