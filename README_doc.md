# Books Api

Books Api es una API REST pública que contiene información sobre libros de varios generos. Además, tambien puede registrar información de nuevos libros, actualizar y eliminar sobre los libros que usted agregue. Asimismo, también contiene sistema de autenticación de usuarios mediante JWT.

Leer este documento en [English](https://github.com/Juancamilo21/books-api/edit/main/README_doc.md]) | [Swagger](https://api/v1/swagger)

## Tabla de Contenido

- [Books Api](#books-api)
  - [Tabla de Contenido](#tabla-de-contenido)
  - [Libros](#libros)
    - [Obtener todos los libros](#obtener-todos-los-libros)
    - [Obtener libro por id](#obtener-libro-por-id)
    - [Obtener libro por isbn](#obtener-libro-por-isbn)
    - [Crear un libro](#crear-un-libro)
    - [Actualiar un libro](#actualiar-un-libro)
    - [Eliminar un libro](#eliminar-un-libro)
  - [Generos](#generos)
  - [Usuarios](#usuarios)
  - [Autenticación](#autenticación)
  - [Entidades](#entidades)
    - [Entidad Base](#entidad-base)
    - [Entidad de Libros](#entidad-de-libros)
    - [Entidad de Generos](#entidad-de-generos)
    - [Entidad de Usuarios](#entidad-de-usuarios)

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
- ### Obtener libro por id
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
- ### Obtener libro por isbn
  ```bash
  [GET] https://api/v1/books/978-84-9838-058-4
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

  #### Respuesta:

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

- ### Actualizar un libro
- ### Eliminar un libro
  ```bash
  [DELETE] https://api/v1/books/2
  ```
  #### Respuesta:
  ```bash
  204 # No Content
  ```

## Generos

## Usuarios

## Autenticación

## Entidades

ldmeenknekncnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndndakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

- ### Entidad Base

  Esta entidad es extendida por los demas entidades.

  | Atributo   | Type   | Descripción            |
  | ---------- | ------ | ---------------------- |
  | id         | number | El id de las entidades |
  | createdAt  | Date   | Fecha de creación      |
  | updateedAt | Date   | Fecha de actualización |

- ## Entidad de Usuarios

  | Atributo | Type        | Descripción                   |
  | -------- | ----------- | ----------------------------- |
  | fullName | string      | Nombre completo del usuario   |
  | role     | Roles(Enum) | Rol del usuario               |
  | email    | string      | Email del usuario             |
  | password | string      | Contraseña del usuario        |
  | avatar   | string      | Cadena de la URL de la imágen |

- ## Entidad de Generos

  | Atributo   | Type   | Descripción                   |
  | ---------- | ------ | ----------------------------- |
  | genderName | string | Nombre del genero             |
  | image      | string | Cadena de la URL de la imágen |

- ## Entidad de Libros

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
