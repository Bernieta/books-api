# Books Api

Books Api es una API REST pública que contiene información sobre libros de varios generos. Además, tambien puede registrar información de nuevos libros, actualizar y eliminar sobre los libros que usted agregue. Asimismo, también contiene sistema de autenticación de usuarios mediante JWT.

Leer este documento en [English](https://github.com/Juancamilo21/books-api/blob/main/README_en.md) | [Swagger](https://api/v1/swagger)

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
  [GET] https://api/v1/books
  ```
  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 1,
        "createdAt": "2024-05-01T14:36:21.305Z",
        "updatedAt": "2024-05-01T14:36:21.305Z",
        "title": "El principito",
        "isbn": "978-84-204-5391-4",
        "author": "Antoine de Saint-Exupéry",
        "description": "El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry.",
        "pagesNumber": 96,
        "editorial": "Salamandra",
        "publicationDate": "1943-04-06T05:00:00.000Z"
      }
      // otros...
    ]
  }
  ```
- ### Obtener un solo libro

  ```bash
  [GET] https://api/v1/books/2
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 2,
      "createdAt": "2024-05-01T14:41:59.496Z",
      "updatedAt": "2024-05-01T14:41:59.496Z",
      "title": "Cien años de soledad",
      "isbn": "978-84-376-2312-1",
      "author": "Gabriel García Márquez",
      "description": "Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982.",
      "pagesNumber": 432,
      "editorial": "Editorial Sudamericana",
      "publicationDate": "1967-05-30T00:00:00.000Z"
    }
  }
  ```

- ### Crear un libro

  ```bash
  [POST] https://api/v1/books
  ```

  ```json
  {
    "title": "Harry Potter y la piedra filosofal",
    "isbn": "978-84-9838-058-4",
    "author": "J.K. Rowling",
    "description": "Harry Potter y la piedra filosofal es el primer libro de la serie Harry Potter escrita por la autora británica J.K. Rowling.",
    "pagesNumber": 256,
    "editorial": "Salani Editore",
    "publicationDate": "1997-06-26T00:00:00.000Z",
    "genreId": 2
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Created",
    "statusCode": 201,
    "data": {
      "title": "Harry Potter y la piedra filosofal",
      "isbn": "978-84-9838-058-4",
      "author": "J.K. Rowling",
      "description": "Harry Potter y la piedra filosofal es el primer libro de la serie Harry Potter escrita por la autora británica J.K. Rowling.",
      "pagesNumber": 256,
      "editorial": "Salani Editore",
      "publicationDate": "1997-06-26T00:00:00.000Z",
      "genreId": 2
    }
  }
  ```

- ### Actualizar un libro

  ```bash
  [PUT] https://api/v1/books/2
  ```

  ```json
  {
    "title": "Harry Potter y la piedra filosofal, primera pelicula"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "title": "Harry Potter y la piedra filosofal, primera pelicula",
      "isbn": "978-84-9838-058-4",
      "author": "J.K. Rowling",
      "description": "Harry Potter y la piedra filosofal es el primer libro de la serie Harry Potter escrita por la autora británica J.K. Rowling.",
      "pagesNumber": 256,
      "editorial": "Salani Editore",
      "publicationDate": "1997-06-26T00:00:00.000Z",
      "genreId": 2
    }
  }
  ```

- ### Eliminar un libro
  ```bash
  [DELETE] https://api/v1/books/2
  ```
  #### Respuesta
  ```bash
  204 # No Content
  ```

## Filtros

- ### Filtrar por isbn

  ```bash
  [GET] https://api/v1/books/?isbn=9788498380584
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 3,
      "createdAt": "2024-05-01T14:42:29.056Z",
      "updatedAt": "2024-05-01T14:47:44.337Z",
      "title": "Harry Potter y la piedra filosofal",
      "isbn": "978-84-9838-058-4",
      "author": "J.K. Rowling",
      "description": "Harry Potter y la piedra filosofal es el primer libro de la serie Harry Potter escrita por la autora británica J.K. Rowling.",
      "pagesNumber": 256,
      "editorial": "Salani Editore",
      "publicationDate": "1997-06-26T00:00:00.000Z"
    }
  }
  ```

- ### Filtrar por titulo

  ```bash
  [GET] https://api/v1/books/?title=Harry Potter y la piedra filosofal
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 3,
      "createdAt": "2024-05-01T14:42:29.056Z",
      "updatedAt": "2024-05-01T14:47:44.337Z",
      "title": "Harry Potter y la piedra filosofal",
      "isbn": "978-84-9838-058-4",
      "author": "J.K. Rowling",
      "description": "Harry Potter y la piedra filosofal es el primer libro de la serie Harry Potter escrita por la autora británica J.K. Rowling.",
      "pagesNumber": 256,
      "editorial": "Salani Editore",
      "publicationDate": "1997-06-26T00:00:00.000Z"
    }
  }
  ```

- ### Filtrar por genero

  ```bash
  [GET] https://api/v1/books/?genreId=2
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 3,
      "createdAt": "2024-05-01T14:42:29.056Z",
      "updatedAt": "2024-05-01T14:47:44.337Z",
      "title": "Harry Potter y la piedra filosofal",
      "isbn": "978-84-9838-058-4",
      "author": "J.K. Rowling",
      "description": "Harry Potter y la piedra filosofal es el primer libro de la serie Harry Potter escrita por la autora británica J.K. Rowling.",
      "pagesNumber": 256,
      "editorial": "Salani Editore",
      "publicationDate": "1997-06-26T00:00:00.000Z"
    }
  }
  ```

- ### Paginación

  ```bash
  [GET] https://api/v1/books/?limit=5&offset=0
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 3,
      "createdAt": "2024-05-01T14:42:29.056Z",
      "updatedAt": "2024-05-01T14:47:44.337Z",
      "title": "Harry Potter y la piedra filosofal",
      "isbn": "978-84-9838-058-4",
      "author": "J.K. Rowling",
      "description": "Harry Potter y la piedra filosofal es el primer libro de la serie Harry Potter escrita por la autora británica J.K. Rowling.",
      "pagesNumber": 256,
      "editorial": "Salani Editore",
      "publicationDate": "1997-06-26T00:00:00.000Z"
    }
  }
  ```

## Generos

- ### Obtener todos los generos

  ```bash
  [GET] https://api/v1/genres
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 2,
        "createdAt": "2024-06-10T00:49:30.389Z",
        "updatedAt": "2024-06-10T00:49:30.389Z",
        "genreName": "Ciencia y tecnología",
        "image": "ggg.png"
      }
      // otros
    ]
  }
  ```

- ### Obtener un solo genero

  ```bash
  [GET] https://api/v1/genres/2
  ```

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 2,
      "createdAt": "2024-06-10T00:49:30.389Z",
      "updatedAt": "2024-06-10T00:49:30.389Z",
      "genreName": "Ciencia y tecnología",
      "image": "ggg.png"
    }
  }
  ```

- ### Crear un genero

  ```bash
  [POST] https://api/v1/genres
  ```

  ```json
  {
    "genreName": "Ciencia y tecnología",
    "image": "ggg.png"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Created",
    "statusCode": 201,
    "data": {
      "genreName": "Ciencia y tecnología",
      "image": "ggg.png",
      "id": 2,
      "createdAt": "2024-06-10T00:49:30.389Z",
      "updatedAt": "2024-06-10T00:49:30.389Z"
    }
  }
  ```

- ### Actualizar un genero

  ```bash
  [PUT] https://api/v1/genres/2
  ```

  ```json
  {
    "genreName": "Ciencias tecnológicas"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 2,
      "createdAt": "2024-06-10T00:49:30.389Z",
      "updatedAt": "2024-06-10T01:04:34.269Z",
      "genreName": "Ciencias tecnológicas",
      "image": "ggg.png"
    }
  }
  ```

- ### Eliminar un genero

  ```bash
  [DELETE] https://api/v1/genres/2
  ```

  ```bash
  204 # No Content
  ```

## Usuarios

- ### Obtener todos los usuarios
  ```bash
  [GET] https://api/users
  ```
  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": [
      {
        "id": 2,
        "createdAt": "2024-06-10T14:33:26.626Z",
        "updatedAt": "2024-06-10T14:33:26.626Z",
        "fullName": "Juan Garcia",
        "role": "customer",
        "email": "juan@mail.com",
        "password": "$2b$10$Cx0DXvUVzKv64LuNbkLGmuykKCcrF/1SHCNkqut7rTVJ.xlBX9.ZK",
        "avatar": "https://n9.cl/books-api"
      }
      // otros
    ]
  }
  ```
- ### Obtener un solo usuario
  ```bash
  [GET] https://api/users/2
  ```
  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 2,
      "createdAt": "2024-06-10T14:33:26.626Z",
      "updatedAt": "2024-06-10T14:33:26.626Z",
      "fullName": "Juan Garcia",
      "role": "customer",
      "email": "juan@mail.com",
      "password": "$2b$10$Cx0DXvUVzKv64LuNbkLGmuykKCcrF/1SHCNkqut7rTVJ.xlBX9.ZK",
      "avatar": "https://n9.cl/books-api"
    }
  }
  ```
- ### Crear un usuario

  ```bash
  [POST] https://api/users
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
      "password": "$2b$10$Cx0DXvUVzKv64LuNbkLGmuykKCcrF/1SHCNkqut7rTVJ.xlBX9.ZK",
      "avatar": "https://n9.cl/books-api",
      "role": "customer",
      "id": 2,
      "createdAt": "2024-06-09T01:35:28.439Z",
      "updatedAt": "2024-06-09T01:35:28.439Z"
    }
  }
  ```

- ### Actualizar un usuario
  ```bash
  [PUT] https://api/v1/users/3
  ```
  ```json
  {
    "fullName": "Juan Arrieta Bernal"
  }
  ```
  #### Respuesta
  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "fullName": "Juan Arrieta Bernal",
      "email": "juan@mail.com",
      "password": "$2b$10$VFfbjqcD45g6OE0TWxvc3eNOgl1Cr4acXRmnfrsMgIix1FBl38Be.",
      "avatar": "aaaaaa.png",
      "role": "customer",
      "id": 3,
      "createdAt": "2024-06-09T01:35:28.439Z",
      "updatedAt": "2024-06-09T01:35:28.439Z"
    }
  }
  ```
- ### Eliminar un usuario
  ```bash
  [DELETE] https://api/v1/users/3
  ```
  #### Respuesta:
  ```bash
  204 # No Content
  ```

## Autenticación

- ### Login

  ```bash
  [POST] https://api/v1/auth/login
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
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImlhdCI6MTcxNzg5Njk2MSwiZXhwIjoxNzE3ODk3MDgxfQ.GIaIRlAVS0FM6eaO0Kyxfc1VtTBWwNx7wRxA6BndAzY"
  }
  ```

- ### Perfil

  ```bash
  [GET] https://api/v1/auth/profile
  ```

  ```json
  // Headers
  {
    "Authorization": "Bearer { your access token }"
  }
  ```

  #### Respuesta

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "data": {
      "id": 3,
      "createdAt": "2024-06-09T01:35:28.439Z",
      "updatedAt": "2024-06-09T01:35:28.439Z",
      "fullName": "Juan Arrieta",
      "role": "customer",
      "email": "juan@mail.com",
      "password": "$2b$10$VFfbjqcD45g6OE0TWxvc3eNOgl1Cr4acXRmnfrsMgIix1FBl38Be.",
      "avatar": "aaaaaa.png"
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
