# Books Api

## Introducción

Books Api es una API REST pública que contiene información sobre libros de varios generos. Además, tambien puede registrar información de nuevos libros, actualizar y eliminar sobre los libros que usted agregue. Asimismo, también contiene sistema de autenticación de usuarios mediante JWT.

* [Libros](#) 
* [Generos](#)
* [Usuarios](#)
* [Auth JWT](#)

## Esquemas

ldmeenknekncnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndndakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

* ### Esquema Base

    | Atributo   | Type | Descripción            |
    |------------|------|------------------------|
    | id         |number| El id de las entidades |
    | createdAt  |Date  | Fecha de creación      |
    | updateedAt |Date  | Fecha de actualización |

* ## Esquema de Usuarios

    | Atributo   | Type        | Descripción                   |
    |------------|-------------|-------------------------------|
    | fullName   | string      | Nombre completo del usuario   |
    | role       | Roles(Enum) | Rol del usuario               |
    | email      | string      | Email del usuario             |
    | password   | string      | Contraseña del usuario        |
    | avatar     | string      | Cadena de la URL de la imágen |

* ## Esquema de Generos

    | Atributo   | Type   | Descripción                   |
    |------------|--------|-------------------------------|
    | genderName | string | Nombre del genero             |
    | image      | string | Cadena de la URL de la imágen |

* ## Esquema de Libros

    | Atributo        | Type        | Descripción                    |
    |-----------------|-------------|--------------------------------|
    | title           | string      | Titulo del libro               |
    | isbn            | string      | Isbn unico del libro           |
    | author          | string      | Nombre(es) del autor(es)       |
    | description     | string      | Descripción del libro          |
    | pagesNumber     | number      | Número de páginas del libro    |
    | editorial       | string      | Nombre de la editorial         |
    | publicationDate | Date        | Fecha de publicación del libro |
