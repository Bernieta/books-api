# Books Api

## Introducción

Books Api es una API REST pública que contiene información sobre libros de varios generos. Además, tambien puede registrar información de nuevos libros, actualizar y eliminar sobre los libros que usted agregue. Asimismo, también contiene sistema de autenticación de usuarios mediante JWT.

* [Libros](#) 
* [Generos](#)
* [Usuarios](#)
* [Auth JWT](#)

## Entidades

ldmeenknekncnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndndakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

* ### Entidad Base
  Este esquema es extendido por los demas esquemas.

    | Atributo   | Type | Descripción            |
    |------------|------|------------------------|
    | id         |number| El id de las entidades |
    | createdAt  |Date  | Fecha de creación      |
    | updateedAt |Date  | Fecha de actualización |

* ## Entidad de Usuarios

    | Atributo   | Type        | Descripción                   |
    |------------|-------------|-------------------------------|
    | fullName   | string      | Nombre completo del usuario   |
    | role       | Roles(Enum) | Rol del usuario               |
    | email      | string      | Email del usuario             |
    | password   | string      | Contraseña del usuario        |
    | avatar     | string      | Cadena de la URL de la imágen |

* ## Entidad de Generos

    | Atributo   | Type   | Descripción                   |
    |------------|--------|-------------------------------|
    | genderName | string | Nombre del genero             |
    | image      | string | Cadena de la URL de la imágen |

* ## Entidad de Libros

    | Atributo        | Type        | Descripción                    |
    |-----------------|-------------|--------------------------------|
    | title           | string      | Titulo del libro               |
    | isbn            | string      | Isbn unico del libro           |
    | author          | string      | Nombre(es) del autor(es)       |
    | description     | string      | Descripción del libro          |
    | pagesNumber     | number      | Número de páginas del libro    |
    | editorial       | string      | Nombre de la editorial         |
    | publicationDate | Date        | Fecha de publicación del libro |
    | image           | string      | Cadena de la URL dr la imágen  |
