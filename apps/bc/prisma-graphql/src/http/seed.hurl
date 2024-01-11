# run me in root of src/prisma-express-graphql:
# hurl --variables-file .env http/getFiftyCitiesOfCountry.hurl --test

POST http://localhost:{{SERVER_PORT}}/graphql
```graphql
{
  seedPrisma
}
  
```

