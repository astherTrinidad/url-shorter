# url shorter

## Características 📋

• Framework

Se utiliza Symfony 5.

• Lenguajes

El código se escribe en PHP 8 y las sentencias que se ejecutan en la base de datos son de tipo SQL.

• Docker

Para levantar la API y la base de datos usamos docker para escritorio (Se puede descargar en https://docs.docker.com/docker-for-windows/install/).

• Integración con bases de datos

Se integra con Doctrine, ORM para bases de datos con Symfony. Solamente hay que configurar los datos de conexión y los modelos. La base de datos es MySQL.

## Quick start 🚀

Con estos pasos la API estará preparada para hacerle llamadas desde el front.

1. Descarga del proyecto desde el repositorio de GitHub
   git clone https://github.com/astherTrinidad/url-shorter.git
2. Nos situamos dentro de la carpeta del proyecto e iniciamos las máquinas virtuales que harán de servidor y de base de datos en Docker.

```
docker-compose up
```

Si fuera necesario podemos detener los contenedores en ejecución

```
docker-compose stop
```

3. Actualizamos en la máquina virtual de PHP el esquema de la base de datos

```
php bin/console doctrine:schema:update --force
```

#Despliegue local 📦

Este proyecto en local corre en el puerto 8000, lo que significa que se podrá ejecutar en el navegador con:

```
http://localhost:8000/rutaEndPoint
```

Dentro del proyecto podemos especificar variables en un fichero llamado .env. En este fichero aparece, por ejemplo, la definición del entorno:

```
APP_ENV=local
```

Otros datos importantes contenidos en este fichero son los puertos que utiliza la base de datos y sus claves de acceso.

#Construido con 🛠️

• Symfony 5 • Doctrine • PHP 8 • MySQL
