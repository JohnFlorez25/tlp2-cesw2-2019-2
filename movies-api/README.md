# Anatomia de una API Resful

**REST (Representational State Transfer)** es un estilo de arquitectura para construir web services, no es un estándar pero si una especificación muy usada e implementada creada por **Roy Fielding**.

Roy Fielding tiene la producción de HTTP 1.1, lo interesante es que es creado en la definición de un estilo Arquitectónico, el objetivo de Fielding era REST, y para ello se dio cuenta que HTTP 0.9 tenia limitaciones.

REST no tiene nada que ver con aplicaciones web, desde su definición principal, nada que ver con experiencia de usuario, o si corre en celular o en navegador web, surgen elementos **comerciales para la clasificación de los tipos de aplicaciones (APIRestful)**.

El objetivo de Fielding era ver como podíamos producir un sistema escalable, la escalabilidad del sistema es clave en esto, (pedir más a algo y que sea soportable). Uno busca que el computador nos responda, por ejemplo agregar más usuarios y que el sistema continúe estable y no se degrade ante más solicitudes. 

> En **REST** la escalabilidad es física, estrictamente física, REST plantea que cuando llegue una unidad nueva el estilo arquitectónico lo soporte y no se degrade, es decir, el sistema no es más lento, es clave para comprender bien REST. 


Las peticiones HTTP van acompañadas de un “verbo” que define el tipo de petición:

- **GET.** Lectura de datos.
- **PUT.** Reemplazar datos.
- **PATCH.** Actualizar datos en un recurso específico.
- **POST.** Creación de datos.
- **DELETE.** Eliminación de datos.

No es recomendable habilitar un endpoint de tipo **PUT** y **DELETE** para toda nuestra colección de datos, sólo hacerlos para recursos específicos, ya que no queremos que por error se puedan borrar todos nuestros datos.

## Estructura de una colección de datos con Mockaroo

[Mockaroo](https://mockaroo.com/) es un servicio que nos permite crear datos simulados a partir de una estructura, por ejemplo para generar la estructura de una película:
```js
{
    id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e',
    title: 'Notti bianche, Le (White Nights)',
    year: 2019,
    cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
    description:'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 66,
    contentRating: 'G',
    source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
    tags: [
      'Action|Adventure',
      'Action|Adventure|Thriller',
      'Horror|Western',
      'Horror|Thriller',
      'Comedy|Romance|Sci-Fi',
      'Adventure|Animation|Children|Comedy|Fantasy',
      'Drama'
    ]
  }
```
**Quiero saber más**

- [Tesis Doctoral Roy Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf)
- [Códigos HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Status)



