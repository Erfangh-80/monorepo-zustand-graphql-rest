# run me in root of prisma-express-postgres:
# hurl --variables-file .env ./http/city/create.hurl 

POST http://localhost:{{SERVER_PORT}}/prisma/cities
Content-Type:application/json

{
	"name":"Hegmataneh",
	"population":90000,
	"abb":"PR"
}