# Configurando nuestro Servidor en express JS

Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

Con miles de métodos de programa de utilidad HTTP y middleware a su disposición, la creación de una API sólida es rápida y sencilla.

Express proporciona una delgada capa de características de aplicación web básicas, que no ocultan las características de Node.js que tanto ama y conoce.

> Al estar ubicado en la carpeta en que deseas crear el proyecto se debe crear el **package.json** archivo que es importante para tener todas las dependencias y confifuraciones de su proyecto.

Desde la consola se crea con el siguiente comando:

`npm init -y`

Para instalar express y dotenv - para configurar variables de entorno - el siguiente comando:

`npm i express dotenv`

## Elementos para configurar un entorno profesional de express

- **nodemon:** utilidad que monitorea los cambios en el código fuente que se esta desarrollando y automáticamente re inicia el servidor.
- **Variable de entorno:** forman un conjunto de valores dinámicos que normalmente afectan al comportamiento de los procesos en una computadora.
- **Eslint:** herramienta que identifica y reporta patrones y errores en código ECMAScript/JavaScript. es similar a JS-Lint y JSHint con algunas diferencias: ... ESLint usa un AST para evaluar patrones en código. ESLint soporta plugins, cada regla es un plugin y puedes agregar más en desarrollo.
- **Prettier:** herramienta que permite dar y mantener un formato consistente al código, algunos editores de texto, cómo VSCode permiten instalar prettier y configurar cuando quieres que se ejecute.

Para instalar la configuración inicial de nuestro proyecto:

`npm i -D nodemon eslint eslint-config-prettier eslin-plugin-prettier prettier`

Y finalmente para que nuestro código tenga un formato con buenas prácticas una vez se realicen los correspondientes commits y se sube al repositorio vamos a instalar un **hook** y la instalación la realizamos con el comando: 

`npx mrm lint-staged`

Con esto lint-staged automaticamente modifica nuestro **package.json** y le dice que cada vez que haga commit formatee todo el código con la configuración  establecida con eslint y prettier y lo subimos al repositorio. 