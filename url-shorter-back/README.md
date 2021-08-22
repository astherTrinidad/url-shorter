## Características 📋

### Framework

Se utiliza Symfony 5.

### Versiones

• Symfony: 5

• PHP: 7.4.16

• MYSQL: 8.0

### Lenguajes 🛠️

El código se escribe en PHP.

Se integra con Doctrine, ORM para bases de datos con Symfony. Solamente hay que configurar los datos de conexión y el modelo. La base de datos es MySQL.

## Quick start 🚀

Para levantar la API y la base de datos usamos docker para escritorio (Se puede descargar en https://docs.docker.com/docker-for-windows/install/).

Con los siguientes pasos la API estará preparada para hacerle llamadas desde el front.

1. Descargamos el proyecto desde el repositorio de GitHub

```
   git clone https://github.com/astherTrinidad/url-shorter.git
```

2. Nos situamos dentro de la carpeta del proyecto e iniciamos las máquinas virtuales que harán de servidor y de base de datos en Docker.

```
docker-compose up
```

Si fuera necesario podemos detener los contenedores en ejecución.

```
docker-compose stop
```

3. Actualizamos en la máquina virtual de PHP el esquema de la base de datos.

```
php bin/console doctrine:schema:update --force
```

## Symfony

Este proyecto en local corre en el puerto 8000, lo que significa que se podrá ejecutar en el navegador con:

```
http://localhost:8000/rutaEndPoint
```

Dentro del proyecto podemos especificar variables en un fichero llamado .env. En este fichero aparece, por ejemplo, la definición del entorno.

```
APP_ENV=local
```

Otros datos importantes contenidos en este fichero son los puertos que utiliza la base de datos y sus claves de acceso.

### Estructura de carpetas 📁

```
└── src
    ├── Controller
    │   ├── PostUrlController.php
    │   └── RedirectUrlController.php
    ├── Entity
    │   └── Url.php
    ├── Kernel.php
    ├── Repository
    │   └── UrlRepository.php
    └── Services
        ├── PostUrlManager.php
        └── RedirectUrlManager.php
```
