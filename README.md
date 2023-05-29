
# API Node.js com SOLID

Nesse projeto será desenvolvido uma aplicação para check-ins em academias. Aqui você irá aprender sobre alguns conceitos do SOLID, Design Patterns, Docker para iniciar o banco de dados, JWT e Refresh Token, RBAC e diversos outros conceitos.




## Bibliotecas

npm init - y
npm i typescript @types/node tsx tsup -D
npx tsc --init
npm i fastify
npm i dotenv
npm i zod
npm i @rocketseat/eslint-config -D
{
  "extends": 
   [ "@rocketseat/eslint-config/node"]

}

npm i prisma -D
npx prisma init

criando um docker para o banco;

docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p5432:5432 -d bitnami/postgresql:latest


## Instalação

Faça o clone do projeto

```bash
  npm install 
  cd my-project
```
    