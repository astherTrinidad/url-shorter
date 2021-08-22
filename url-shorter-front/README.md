## Características 📋

### Framework

![logo react](https://user-images.githubusercontent.com/61313038/118236531-7a9aee00-b496-11eb-93ed-8e6ea0417edb.png)

Se utiliza React.
https://es.reactjs.org/

### Versiones

• React: 17.0.2

• Node: v14.17.0

• NPM: 6.14.13

### Lenguajes 🛠️

El código se escribe en ReactJs.

Cada uno de los estilos en los diferentes componentes se incluyen mediante styled-components, éste a su vez utiliza todas las propiedades y valores de CSS.

## Quick start 🚀

Este proyecto está creado en React [Create React App](https://github.com/facebook/create-react-app).

Desde el directorio del proyecto debemos levantar el backend usando Docker.

```
docker-compose up -d
```

Instalamos las dependencias con npm.

```
npm install
```

Ahora iniciamos la aplicación de react en la consola.

```
npm start
```

A continuación, el navegador se abrirá y podremos observar que podemos acceder a esta aplicación mediante http://localhost:3000

## React

La variable de entorno en el que indicamos la ruta para poder realizar las llamadas al endPoint se encuentran en un fichero ".env".

Las diferentes llamadas a la API están incorporadas dentro de la carpeta src/api.

Los archivos de configuración de las URLs se encuentran dentro de src/config.

Se incluye una expresión regular para validar la dirección de url introducida. Esta validación está incorporada dentro de la carpeta src/utils.

### Estructura de carpetas 📁

```
├── public
└── src
    ├── api
    │   └── index.js
    ├── assets
    │   ├── colors.js
    │   └── images
    ├── components
    │   ├── atoms
    │   ├── molecules
    │   ├── organisms
    │   ├── pages
    │   └── system
    ├── config
    │   ├── appRoutes.js
    │   └── url.js
    ├── index.css
    ├── index.js
    └── utils
        └── index.js
```

### Estructura de carpetas de componentes visuales 📁

```
atoms
    ├── index.js
    ├── regularButton
    │   ├── index.js
    │   ├── styled.js
    │   └── view.js
    └── regularInput
        ├── index.js
        ├── styled.js
        └── view.js
```
