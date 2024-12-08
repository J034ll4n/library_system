Pré-requisitos:
Instalar Java JDK 17+
Instalar Node.js (recomendado: versão LTS).
Instalar MySQL.
Verificar se o Maven está configurado (para gerenciar dependências do Spring Boot).
Configurar o Banco de Dados:

Inicie o MySQL.
Crie o banco de dados:
sql

CREATE DATABASE library_system;
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255),
    genre VARCHAR(100),
    image_url VARCHAR(255)
);


Atualize as credenciais no arquivo application.properties do back-end:
properties

spring.datasource.url=jdbc:mysql://localhost:3306/library_system
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha


Rodar o Back-end (Spring Boot):
Navegue até o diretório library-system:
bash

cd library-system


Compile e rode o projeto usando Maven:
bash

mvn spring-boot:run


O back-end será iniciado em http://localhost:8080.
Rodar o Front-end (React):
Navegue até o diretório library-frontend:
bash


cd library-frontend


Instale as dependências:
bash


npm install


Inicie o front-end:
bash


npm start


O front-end será iniciado em http://localhost:3000.
Testar a aplicação:
Acesse o front-end em http://localhost:3000.
Certifique-se de que as operações CRUD estão funcionando e integradas ao banco de dados.
