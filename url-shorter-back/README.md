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

1. Nos situamos dentro de la carpeta del proyecto e iniciamos las máquinas virtuales que harán de servidor y de base de datos en Docker.

```
docker-compose up -d
```

2. Descargamos las dependencias del proyecto con composer.

```
docker-compose exec php-fpm composer install
```

3. Actualizamos el esquema de la base de datos.

```
docker-compose exec php-fpm php bin/console doctrine:schema:update --force
```

## Symfony

Este proyecto en local corre en el puerto 8000, lo que significa que se podrá ejecutar en el navegador con:

```
http://localhost:8000/rutaEndPoint
```

Creamos el fichero ".env.local" a partir del archivo ".env".

```
cp .env .env.local
```

### Estructura de carpetas 📁

```
└── src
    ├── Controller
    │   ├── PostUrlController.php
    │   └── RedirectUrlController.php
    ├── Entity
    │   └── Url.php
    ├── Repository
    │   └── UrlRepository.php
    └── Services
        ├── PostUrlManager.php
        └── RedirectUrlManager.php
```
