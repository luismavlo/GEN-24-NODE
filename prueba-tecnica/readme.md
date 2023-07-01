<p align="center">
  <a href="https://expressjs.com/" target="blank"><img src="https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png" width="200" alt="Express Logo" /></a>
</p>

# Book Api

## Descripción del proyecto

Este proyecto es una aplicación web que te permite crear autores, libros y subir imágenes de los libros. La aplicación está construida usando Node.js y Express, y utiliza una base de datos Mysql para almacenar la información de los autores y los libros.

## Características principales

1. Crear, Editar, Eliminar, Buscar Autores

2. Crear, Editar, Eliminar, Buscar Libros

## Tecnologías utilizadas

1. Express: Un framework minimalista de Node.js que facilita la creación de aplicaciones web y APIs.

2. Mysql:

3. Sequelize: Un ORM (Object-Relational Mapping) para bases de datos SQL que simplifica la interacción con la base de datos y proporciona una capa de abstracción sobre SQL.

4. Express-validator: Middleware de Express que valida los datos de entrada antes de que se procesen.

## Requisitos previos

Antes de ejecutar el proyecto, asegurate de tener instalado Node.js, Si no cuentas con docker mysql o en su defecto docker, nodemon en tu maquina.

## Cómo ejecutar el proyecto

1. Clonar el proyecto
2. Ejecutar `npm install`
3. Clonar el archivo `.env.template` y renombrarlo a `.env`
4. Agregar las variables de entorno
5. ejecutar docker-compose up -d para levantar la base de datos
6. Levantar el modo de desarrollo: `npm run start:dev`
