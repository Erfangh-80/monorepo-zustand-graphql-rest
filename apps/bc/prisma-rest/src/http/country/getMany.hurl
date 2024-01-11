# run me in root of prisma-express-postgres:
# hurl --variables-file .env ./http/country/getMany.hurl

GET http://localhost:{{SERVER_PORT}}/prisma/countries?limit=10&page=1