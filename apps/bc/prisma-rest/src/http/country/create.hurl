# run me in root of prisma-express-postgres:
# hurl --variables-file .env ./http/country/create.hurl 

POST http://localhost:{{SERVER_PORT}}/prisma/countries
Content-Type:application/json

{
	"name":"persia",
	"population":90000,
	"abb":"PR"
}
