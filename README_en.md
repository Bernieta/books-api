# Books API

Books API is a public REST API that contains information about books from various genres. Additionally, it allows you to register information about new books, update and delete the books you add. It also includes a user authentication system using JWT.

Read this document in [Spanish](https://github.com/Juancamilo21/books-api/blob/main/README.md) | [Swagger](https://books-api-gvh2.onrender.com/docs)

## Table of Contents

- [Books API](#books-api)
  - [Table of Contents](#table-of-contents)
  - [Books](#books)
    - [Get All Books](#get-all-books)
    - [Get a Single Book](#get-a-single-book)
    - [Create a Book](#create-a-book)
    - [Update a Book](#update-a-book)
    - [Delete a Book](#delete-a-book)
    - [Filters](#filters)
      - [Filter by ISBN](#filter-by-isbn)
      - [Filter by Title](#filter-by-title)
      - [Filter by Genre](#filter-by-genre)
      - [Pagination](#pagination)
  - [Genres](#genres)
    - [Get All Genres](#get-all-genres)
    - [Get a Single Genre](#get-a-single-genre)
    - [Create a Genre](#create-a-genre)
    - [Update a Genre](#update-a-genre)
    - [Delete a Genre](#delete-a-genre)
  - [Users](#users)
    - [Get All Users](#get-all-users)
    - [Get a Single User](#get-a-single-user)
    - [Create a User](#create-a-user)
    - [Update a User](#update-a-user)
    - [Delete a User](#delete-a-user)
  - [Authentication](#authentication)
    - [Login](#login)
    - [Profile](#profile)
  - [Entities](#entities)
    - [Base Entity](#base-entity)
    - [Book Entity](#book-entity)
    - [Genre Entity](#genre-entity)
    - [User Entity](#user-entity)
  - [Installation and Execution](#installation-and-execution)

## Books

- ### Get All Books
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
      // others...
    ]
  }
  ```
- ### Get a Single Book

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

- ### Create a Book

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

  #### Response

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

- ### Update a Book

  ```bash
  [PUT] https://books-api-gvh2.onrender.com/api/books/1
  ```

  ```json
  {
    "title": "Contact"
  }
  ```

  #### Response

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

- ### Delete a Book
  ```bash
  [DELETE] https://books-api-gvh2.onrender.com/api/books/{id}
  ```
  #### Response
  ```bash
  204 # No Content
  ```

## Filters

- ### Filter by ISBN

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/books?isbn=9788417347130 # Ensure it's a valid ISBN
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

- ### Filter by Title

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/books?title=Contacto # Results will show matching entries
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
      // other matching results
    ]
  }
  ```

- ### Filter by Genre

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

- ### Pagination

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
    // other results
  }
  ```

## Genres

- ### Get All Genres

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
      // others
    ]
  }
  ```

- ### Get a Single Genre

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

- ### Create a Genre

  ```bash
  [POST] https://books-api-gvh2.onrender.com/api/genres
  ```

  ```json
  {
    "genreName": "Ficción",
    "image": "https://n9.cl/82b4pn"
  }
  ```

  #### Response

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

- ### Update a Genre

  ```bash
  [PUT] https://books-api-gvh2.onrender.com/api/genres/1
  ```

  ```json
  {
    "genreName": "Ciencia Ficción"
  }
  ```

  #### Response

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

- ### Delete a Genre

  ```bash
  [DELETE] https://books-api-gvh2.onrender.com/api/genres/{id}
  ```

  ```bash
  204 # No Content
  ```

## Users

- ### Get All Users

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
      // others
    ]
  }
  ```

- ### Get a Single User

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

- ### Create a User

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

  #### Response

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

- ### Update a User

  ```bash
  [PUT] https://books-api-gvh2.onrender.com/api/users/1
  ```

  ```json
  {
    "fullName": "Juan Garcia Paredes"
  }
  ```

  #### Response

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

- ### Delete a User
  ```bash
  [DELETE] https://books-api-gvh2.onrender.com/api/users/{id}
  ```
  #### Response:
  ```bash
  204 # No Content
  ```

## Authentication

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

  #### Response

  ```json
  {
    "message": "Successfully",
    "statusCode": 200,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcxODAzMzYzMCwiZXhwIjoxNzE4MDMzNzUwfQ.4Y6nH3zltyZf7qxl1V7Mm1J4OuYCrw0x7Zs3v9pT5rA"
  }
  ```

- ### Profile

  ```bash
  [GET] https://books-api-gvh2.onrender.com/api/auth/profile
  ```

  ```json
  // Headers
  {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcxODAzMzYzMCwiZXhwIjoxNzE4MDMzNzUwfQ.4Y6nH3zltyZf7qxl1V7Mm1J4OuYCrw0x7Zs3v9pT5rA"
  }
  ```

  #### Response

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

## Entities

- ### Base Entity

  This entity is extended by other entities.

  | Attribute | Type   | Description   |
  | --------- | ------ | ------------- |
  | id        | number | Entity ID     |
  | createdAt | Date   | Creation date |
  | updatedAt | Date   | Update date   |

- ### User Entity

  | Attribute | Type        | Description             |
  | --------- | ----------- | ----------------------- |
  | fullName  | string      | User's full name        |
  | role      | Roles(Enum) | User's role             |
  | email     | string      | User's email            |
  | password  | string      | User's password         |
  | avatar    | string      | URL string of the image |

- ### Genre Entity

  | Attribute | Type   | Description             |
  | --------- | ------ | ----------------------- |
  | genreName | string | Genre name              |
  | image     | string | URL string of the image |

- ### Book Entity

  | Attribute       | Type   | Description                  |
  | --------------- | ------ | ---------------------------- |
  | title           | string | Title of the book            |
  | isbn            | string | Unique ISBN of the book      |
  | author          | string | Author(s) name(s)            |
  | description     | string | Description of the book      |
  | pagesNumber     | number | Number of pages of the book  |
  | editorial       | string | Publisher's name             |
  | publicationDate | Date   | Publication date of the book |
  | image           | string | URL string of the image      |

## Installation and Execution

- ### Installation

  ```bash
  $ npm install
  ```

- ### Running the Application

  ```bash
  # development mode
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run start:prod
  ```
