# run me in root of ./apps/bc/prisma-graphql/src:
# hurl --variables-file .env http/getOneCountry.hurl --test

POST http://localhost:{{SERVER_PORT}}/graphql
```graphql
{
  getCountry( limit:10, id:1 ){
    name
    provinces{
      name
      cities{
        id,
        name,
        abb,
        population,
      }
    }
  }
}

```