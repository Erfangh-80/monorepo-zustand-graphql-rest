# run me in root of prisma-express-postgres:
# hurl --variables-file .env ./http/province/create.hurl --test

POST http://localhost:{{SERVER_PORT}}/prisma/provinces
Content-Type:application/json

{
	"name":"Hemedaaan",
	"population":80000,
	"abb":"HM"
}
