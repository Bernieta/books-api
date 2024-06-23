# Books Api

Books Api es una API REST pública que contiene información sobre libros de varios generos. Además, tambien puede registrar información de nuevos libros, actualizar y eliminar sobre los libros que usted agregue. Asimismo, también contiene sistema de autenticación de usuarios mediante JWT.

> ### Nota
> La primera solicitud puede llegar a tardar un poco más de un minuto. Por lo tanto, es necesario esperar a que el servidor se active y responda, luego todo irá rápidamente.

Leer este documento en [English](https://github.com/Juancamilo21/books-api/blob/main/README_en.md) | [Swagger](https://books-api-gvh2.onrender.com/docs)

## Tabla de Contenido

- [Books Api](#books-api)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Libros](#libros)
    - [Obtener todos los libros](#obtener-todos-los-libros)
    - [Obtener un solo libro](#obtener-un-solo-libro)
    - [Crear un libro](#crear-un-libro)
    - [Actualiar un libro](#actualizar-un-libro)
    - [Eliminar un libro](#eliminar-un-libro)
    - [Filtros](#filtros)
      - [Filtrar por isbn](#filtrar-por-isbn)
      - [Filtrar por titulo](#filtrar-por-titulo)
      - [Filtrar por genero](#filtrar-por-genero)
      - [Paginación](#paginación)
  - [Generos](#generos)
    - [Obtener todos los generos](#obtener-todos-los-generos)
    - [Obtener un solo genero](#obtener-un-solo-genero)
    - [Crear un genero](#crear-un-genero)
    - [Actualizar un genero](#actualizar-un-genero)
    - [Eliminar genero](#eliminar-un-genero)
  - [Usuarios](#usuarios)
    - [Obtener todos los usuarios](#obtener-todos-los-libros)
    - [Obtener un solo usuario](#obtener-un-solo-usuario)
    - [Crear un usuario](#crear-un-usuario)
    - [Actualizar un usuario](#actualizar-un-usuario)
    - [Eliminar usuario](#eliminar-un-usuario)
  - [Autenticación](#autenticación)
    - [Login](#login)
    - [Perfil](#perfil)
  - [Entidades](#entidades)
    - [Entidad Base](#entidad-base)
    - [Entidad de Libros](#entidad-de-libros)
    - [Entidad de Generos](#entidad-de-generos)
    - [Entidad de Usuarios](#entidad-de-usuarios)
  - [Instalación y ejecución](#instalación-y-ejecución)

## Libros

- ### Obtener todos los libros
  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/books
  ```
  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 1,
        "createdAt": "2024-06-11T06:29:47.585Z",
        "updatedAt": "2024-06-11T06:29:47.585Z",
        "title": "Contacto",
        "isbn": "9788417347130",
        "author": "Carl Sagan",
        "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
        "pagesNumber": 432,
        "editorial": "NOVA",
        "publicationDate": "2018-03-06T00:00:00.000Z",
        "image": "https://n9.cl/pjt9b",
        "genre": {
          "id": 1,
          "createdAt": "2024-06-11T06:04:58.203Z",
          "updatedAt": "2024-06-11T06:31:08.408Z",
          "genreName": "Ciencia Ficción",
          "image": "https://n9.cl/82b4pn"
        }
      }
      // otros...
    ]
  }
  ```
- ### Obtener un solo libro

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/books/1
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 1,
      "createdAt": "2024-06-11T06:29:47.585Z",
      "updatedAt": "2024-06-11T06:29:47.585Z",
      "title": "Contacto",
      "isbn": "9788417347130",
      "author": "Carl Sagan",
      "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
      "pagesNumber": 432,
      "editorial": "NOVA",
      "publicationDate": "2018-03-06T00:00:00.000Z",
      "image": "https://n9.cl/pjt9b",
      "genre": {
        "id": 1,
        "createdAt": "2024-06-11T06:04:58.203Z",
        "updatedAt": "2024-06-11T06:31:08.408Z",
        "genreName": "Ciencia Ficción",
        "image": "https://n9.cl/82b4pn"
      }
    }
  }
  ```

- ### Crear un libro

  ```bash
  [POST] https://books-api-gvh2.onrender.com/api/books
  ```

  ```json
  {
    "title": "Contacto",
    "isbn": "9788417347130", // Asegurarse de que sea un isbn valido
    "author": "Carl Sagan",
    "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
    "pagesNumber": 432,
    "editorial": "NOVA",
    "publicationDate": "2018-03-06",
    "image": "https://n9.cl/pjt9b",
    "genreId": 1
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Created",
    "statusCode": 201,
    "data": {
      "title": "Contacto",
      "isbn": "9788417347130",
      "author": "Carl Sagan",
      "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
      "pagesNumber": 432,
      "editorial": "NOVA",
      "publicationDate": "2018-03-06T00:00:00.000Z",
      "image": "https://n9.cl/pjt9b",
      "genre": {
        "id": 1,
        "createdAt": "2024-06-11T06:04:58.203Z",
        "updatedAt": "2024-06-11T06:27:24.559Z",
        "genreName": "Ciencia Ficción",
        "image": "https://n9.cl/82b4pn"
      },
      "id": 1,
      "createdAt": "2024-06-11T06:29:47.585Z",
      "updatedAt": "2024-06-11T06:29:47.585Z"
    }
  }
  ```

- ### Actualizar un libro

  ```bash
  [PUT] https://books-api-gvh2.onrender.com/api/books/1
  ```

  ```json
  {
    "title": "Contact"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 1,
      "createdAt": "2024-06-11T06:29:47.585Z",
      "updatedAt": "2024-06-11T06:37:16.888Z",
      "title": "Contact",
      "isbn": "9788417347130",
      "author": "Carl Sagan",
      "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
      "pagesNumber": 432,
      "editorial": "NOVA",
      "publicationDate": "2018-03-06T00:00:00.000Z",
      "image": "https://n9.cl/pjt9b",
      "genre": {
        "id": 1,
        "createdAt": "2024-06-11T06:04:58.203Z",
        "updatedAt": "2024-06-11T06:31:08.408Z",
        "genreName": "Ciencia Ficción",
        "image": "https://n9.cl/82b4pn"
      }
    }
  }
  ```

- ### Eliminar un libro
  ```bash
  [DELETE] https://books-api-gvh2.onrender.com/api/books/{id}
  ```
  #### Respuesta
  ```bash
  204 # No Content
  ```

## Filtros

- ### Filtrar por isbn

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/books?isbn=9788417347130 # Asegurarse de que sea un isbn valido
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 1,
        "createdAt": "2024-06-11T06:29:47.585Z",
        "updatedAt": "2024-06-11T06:38:16.019Z",
        "title": "Contacto",
        "isbn": "9788417347130",
        "author": "Carl Sagan",
        "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
        "pagesNumber": 432,
        "editorial": "NOVA",
        "publicationDate": "2018-03-06T00:00:00.000Z",
        "image": "https://n9.cl/pjt9b",
        "genre": {
          "id": 1,
          "createdAt": "2024-06-11T06:04:58.203Z",
          "updatedAt": "2024-06-11T06:31:08.408Z",
          "genreName": "Ciencia Ficción",
          "image": "https://n9.cl/82b4pn"
        }
      }
    ]
  }
  ```

- ### Filtrar por titulo

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/books?title=Contacto # Los resultados muestran las coincidencias encontradas
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 1,
        "createdAt": "2024-06-11T06:29:47.585Z",
        "updatedAt": "2024-06-11T06:38:16.019Z",
        "title": "Contacto",
        "isbn": "9788417347130",
        "author": "Carl Sagan",
        "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
        "pagesNumber": 432,
        "editorial": "NOVA",
        "publicationDate": "2018-03-06T00:00:00.000Z",
        "image": "https://n9.cl/pjt9b",
        "genre": {
          "id": 1,
          "createdAt": "2024-06-11T06:04:58.203Z",
          "updatedAt": "2024-06-11T06:31:08.408Z",
          "genreName": "Ciencia Ficción",
          "image": "https://n9.cl/82b4pn"
        }
      }
      // otros resultados que coincidan
    ]
  }
  ```

- ### Filtrar por genero

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/books?genreId=1
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 1,
        "createdAt": "2024-06-11T06:29:47.585Z",
        "updatedAt": "2024-06-11T06:38:16.019Z",
        "title": "Contacto",
        "isbn": "9788417347130",
        "author": "Carl Sagan",
        "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
        "pagesNumber": 432,
        "editorial": "NOVA",
        "publicationDate": "2018-03-06T00:00:00.000Z",
        "image": "https://n9.cl/pjt9b",
        "genre": {
          "id": 1,
          "createdAt": "2024-06-11T06:04:58.203Z",
          "updatedAt": "2024-06-11T06:31:08.408Z",
          "genreName": "Ciencia Ficción",
          "image": "https://n9.cl/82b4pn"
        }
      }
    ]
  }
  ```

- ### Paginación

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/books?limit=5&offset=0
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 1,
        "createdAt": "2024-06-11T06:29:47.585Z",
        "updatedAt": "2024-06-11T06:38:16.019Z",
        "title": "Contacto",
        "isbn": "9788417347130",
        "author": "Carl Sagan",
        "description": "Contacto es la única novela escrita por el astrónomo estadounidense Carl Sagan, uno de los mayores divulgadores científicos del siglo XX.",
        "pagesNumber": 432,
        "editorial": "NOVA",
        "publicationDate": "2018-03-06T00:00:00.000Z",
        "image": "https://n9.cl/pjt9b",
        "genre": {
          "id": 1,
          "createdAt": "2024-06-11T06:04:58.203Z",
          "updatedAt": "2024-06-11T06:31:08.408Z",
          "genreName": "Ciencia Ficción",
          "image": "https://n9.cl/82b4pn"
        }
      }
    ]
    // Otros resultados
  }
  ```

## Generos

- ### Obtener todos los generos

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/genres
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 1,
        "createdAt": "2024-06-11T06:04:58.203Z",
        "updatedAt": "2024-06-11T06:07:32.464Z",
        "genreName": "Ficción",
        "image": "https://n9.cl/82b4pn"
      }
      // otros
    ]
  }
  ```

- ### Obtener un solo genero

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/genres/1
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 1,
      "createdAt": "2024-06-11T06:04:58.203Z",
      "updatedAt": "2024-06-11T06:07:32.464Z",
      "genreName": "Ficción",
      "image": "https://n9.cl/82b4pn"
    }
  }
  ```

- ### Crear un genero

  ```bash
  [POST] https://books-api-gvh2.onrender.com/api/genres
  ```

  ```json
  {
    "genreName": "Ficción",
    "image": "https://n9.cl/82b4pn"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Created",
    "statusCode": 201,
    "data": {
      "genreName": "Ficción",
      "image": "https://n9.cl/82b4pn",
      "id": 1,
      "createdAt": "2024-06-11T06:04:58.203Z",
      "updatedAt": "2024-06-11T06:04:58.203Z"
    }
  }
  ```

- ### Actualizar un genero

  ```bash
  [PUT] https://books-api-gvh2.onrender.com/api/genres/1
  ```

  ```json
  {
    "genreName": "Ciencia Ficción"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 1,
      "createdAt": "2024-06-11T06:04:58.203Z",
      "updatedAt": "2024-06-11T06:07:32.464Z",
      "genreName": "Ciencia Ficción",
      "image": "https://n9.cl/82b4pn"
    }
  }
  ```

- ### Eliminar un genero

  ```bash
  [DELETE] https://books-api-gvh2.onrender.com/api/genres/{id}
  ```

  ```bash
  204 # No Content
  ```

## Usuarios

- ### Obtener todos los usuarios
  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/users
  ```
  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 1,
        "createdAt": "2024-06-10T20:22:29.403Z",
        "updatedAt": "2024-06-10T20:22:29.403Z",
        "fullName": "Juan Garcia",
        "role": "customer",
        "email": "juan@mail.com",
        "password": "$2b$10$bu3vXhnk/.4YtXjacG2RJ.b4ivy.JMR1Ms.1KEO09P4yiwv7IWlhG",
        "avatar": "https://n9.cl/books-api"
      }
      // otros
    ]
  }
  ```
- ### Obtener un solo usuario
  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/users/1
  ```
  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 1,
      "createdAt": "2024-06-10T20:22:29.403Z",
      "updatedAt": "2024-06-10T20:22:29.403Z",
      "fullName": "Juan Garcia",
      "role": "customer",
      "email": "juan@mail.com",
      "password": "$2b$10$bu3vXhnk/.4YtXjacG2RJ.b4ivy.JMR1Ms.1KEO09P4yiwv7IWlhG",
      "avatar": "https://n9.cl/books-api"
    }
  }
  ```
- ### Crear un usuario

  ```bash
  [POST] https://books-api-gvh2.onrender.com/api/users
  ```

  ```json
  {
    "fullName": "Juan Garcia",
    "email": "juan@mail.com",
    "password": "juan123",
    "avatar": "https://n9.cl/books-api"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Created",
    "statusCode": 201,
    "data": {
      "fullName": "Juan Garcia",
      "email": "juan@mail.com",
      "password": "$2b$10$bu3vXhnk/.4YtXjacG2RJ.b4ivy.JMR1Ms.1KEO09P4yiwv7IWlhG",
      "avatar": "https://n9.cl/books-api",
      "role": "customer",
      "id": 1,
      "createdAt": "2024-06-10T20:22:29.403Z",
      "updatedAt": "2024-06-10T20:22:29.403Z"
    }
  }
  ```

- ### Actualizar un usuario
  ```bash
  [PUT] https://books-api-gvh2.onrender.com/api/users/1
  ```
  ```json
  {
    "fullName": "Juan Garcia Paredes"
  }
  ```
  #### Respuesta
  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 1,
      "createdAt": "2024-06-10T20:22:29.403Z",
      "updatedAt": "2024-06-10T20:29:47.423Z",
      "fullName": "Juan Garcia Paredes",
      "role": "customer",
      "email": "juan@mail.com",
      "password": "$2b$10$bu3vXhnk/.4YtXjacG2RJ.b4ivy.JMR1Ms.1KEO09P4yiwv7IWlhG",
      "avatar": "https://n9.cl/books-api"
    }
  }
  ```
- ### Eliminar un usuario
  ```bash
  [DELETE] https://books-api-gvh2.onrender.com/api/users/{id}
  ```
  #### Respuesta:
  ```bash
  204 # No Content
  ```

## Autenticación

- ### Login

  ```bash
  [POST] https://books-api-gvh2.onrender.com/api/auth/login
  ```

  ```json
  // Body
  {
    "email": "juan@mail.com",
    "password": "juan123"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcxODAzMzYzMCwiZXhwIjoxNzE4MDMzNzUwfQ.4Y6nH3zltyZf7qxl1V7Mm1J4OuYCrw0x7Zs3v9pT5rA"
  }
  ```

- ### Perfil

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/auth/profile
  ```

  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcxODAzMzYzMCwiZXhwIjoxNzE4MDMzNzUwfQ.4Y6nH3zltyZf7qxl1V7Mm1J4OuYCrw0x7Zs3v9pT5rA"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 1,
      "createdAt": "2024-06-10T20:22:29.403Z",
      "updatedAt": "2024-06-10T20:29:47.423Z",
      "fullName": "Juan Garcia Paredes",
      "role": "customer",
      "email": "juan@mail.com",
      "password": "$2b$10$bu3vXhnk/.4YtXjacG2RJ.b4ivy.JMR1Ms.1KEO09P4yiwv7IWlhG",
      "avatar": "https://n9.cl/books-api"
    }
  }
  ```

## Entidades

- ### Entidad Base

  Esta entidad es extendida por los demas entidades.

  | Atributo   | Type   | Descripción            |
  | ---------- | ------ | ---------------------- |
  | id         | number | El id de las entidades |
  | createdAt  | Date   | Fecha de creación      |
  | updateedAt | Date   | Fecha de actualización |

- ### Entidad de Usuarios

  | Atributo | Type        | Descripción                   |
  | -------- | ----------- | ----------------------------- |
  | fullName | string      | Nombre completo del usuario   |
  | role     | Roles(Enum) | Rol del usuario               |
  | email    | string      | Email del usuario             |
  | password | string      | Contraseña del usuario        |
  | avatar   | string      | Cadena de la URL de la imágen |

- ### Entidad de Generos

  | Atributo   | Type   | Descripción                   |
  | ---------- | ------ | ----------------------------- |
  | genderName | string | Nombre del genero             |
  | image      | string | Cadena de la URL de la imágen |

- ### Entidad de Libros

  | Atributo        | Type   | Descripción                    |
  | --------------- | ------ | ------------------------------ |
  | title           | string | Titulo del libro               |
  | isbn            | string | Isbn unico del libro           |
  | author          | string | Nombre(es) del autor(es)       |
  | description     | string | Descripción del libro          |
  | pagesNumber     | number | Número de páginas del libro    |
  | editorial       | string | Nombre de la editorial         |
  | publicationDate | Date   | Fecha de publicación del libro |
  | image           | string | Cadena de la URL dr la imágen  |

## Instalación y ejecución

- ### Instalación

  ```bash
  $ npm install
  ```

- ### Ejecutar la aplicación

  ```bash
  # development
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run start:prod
  ```
