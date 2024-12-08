# Biblioteca Digital: Sistema Integrado de Gestão de Livros **CRUD**

Bem-vindo ao **Biblioteca Digital**, um sistema de gestão de livros que permite realizar operações de **CRUD** (Criar, Consultar, Atualizar e Deletar) em uma biblioteca municipal.
![Sem título](https://github.com/user-attachments/assets/80b16399-243f-415f-a89d-1d99027ab3bf)

## 📖 Visão Geral

Este projeto foi desenvolvido para modernizar o gerenciamento de bibliotecas, tornando-as mais eficientes e acessíveis. Ele é composto por um **back-end** desenvolvido em **Spring Boot** e um **front-end** construído com **React**.

### 🔧 Funcionalidades

- Adicionar novos livros.
- Atualizar informações de livros existentes.
- Excluir livros do sistema.
- Upload de imagens para cada livro.

## 🚀 Tecnologias Utilizadas

- **Back-end**: Spring Boot (Java)
- **Front-end**: React.js
- **Banco de Dados**: MySQL
- **Integração**: Axios para comunicação entre front-end e back-end.

## 📂 Estrutura do Projeto

### 📁 Back-end (`library-system`)
- Implementado com Spring Boot.
- Endpoints para operações CRUD integrados ao banco de dados MySQL.
- Configuração em `src/main/resources/application.properties`.

### 📁 Front-end (`library-frontend`)
- Criado com React.
- Permite interação amigável com o usuário.
- Componentes principais:
  - `BookForm`: Para adicionar/editar livros.
  - `BookList`: Para listar, editar e excluir livros.

## ⚙️ Como Executar o Projeto Localmente

### 1. Pré-requisitos

Certifique-se de ter instalado:
- **Java 17+** (para rodar o back-end)
- **Node.js** (para rodar o front-end)
- **MySQL** (para o banco de dados)
- Git (para clonar o repositório)

### 2. Clone o Repositório

bash
git clone https://github.com/J034ll4n/library_system.git
cd library_system

3.1. Configuração do Banco de Dados
Crie um banco de dados no MySQL com o nome library_system.
Atualize o arquivo application.properties com suas credenciais:
properties

spring.datasource.url=jdbc:mysql://localhost:3306/library_system
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA

3.2. Rodando o Back-end
Na pasta library-system, execute:

bash
Copiar código
./mvnw spring-boot:run
O back-end estará disponível em http://localhost:8080.


Um bom arquivo README é fundamental para documentar seu projeto, tornando-o acessível e compreensível para outras pessoas (e para você no futuro). Aqui está um modelo básico para configurar o seu:

1. Estrutura básica do README
Crie um arquivo chamado README.md na raiz do seu projeto e use o seguinte modelo como base:

markdown
Copiar código
# Biblioteca Digital: Sistema Integrado de Gestão de Livros

Bem-vindo ao **Biblioteca Digital**, um sistema de gestão de livros que permite realizar operações de **CRUD** (Criar, Consultar, Atualizar e Deletar) em uma biblioteca municipal.

## 📖 Visão Geral

Este projeto foi desenvolvido para modernizar o gerenciamento de bibliotecas, tornando-as mais eficientes e acessíveis. Ele é composto por um **back-end** desenvolvido em **Spring Boot** e um **front-end** construído com **React**.

### 🔧 Funcionalidades

- Adicionar novos livros.
- Atualizar informações de livros existentes.
- Consultar o catálogo de livros.
- Excluir livros do sistema.
- Upload de imagens para cada livro.

## 🚀 Tecnologias Utilizadas

- **Back-end**: Spring Boot (Java)
- **Front-end**: React.js
- **Banco de Dados**: MySQL
- **Integração**: Axios para comunicação entre front-end e back-end.

## 📂 Estrutura do Projeto

### 📁 Back-end (`library-system`)
- Implementado com Spring Boot.
- Endpoints para operações CRUD integrados ao banco de dados MySQL.
- Configuração em `src/main/resources/application.properties`.

### 📁 Front-end (`library-frontend`)
- Criado com React.
- Permite interação amigável com o usuário.
- Componentes principais:
  - `BookForm`: Para adicionar/editar livros.
  - `BookList`: Para listar, editar e excluir livros.

## ⚙️ Como Executar o Projeto Localmente

### 1. Pré-requisitos

Certifique-se de ter instalado:
- **Java 17+** (para rodar o back-end)
- **Node.js** (para rodar o front-end)
- **MySQL** (para o banco de dados)
- Git (para clonar o repositório)

### 2. Clone o Repositório
bash
git clone https://github.com/J034ll4n/library_system.git
cd library_system
3. Configurar o Back-end
3.1. Configuração do Banco de Dados
Crie um banco de dados no MySQL com o nome library_system.
Atualize o arquivo application.properties com suas credenciais:
properties

spring.datasource.url=jdbc:mysql://localhost:3306/library_system
spring.datasource.username=SEU_USUARIO
spring.datasource.password=SUA_SENHA

3.2. Rodando o Back-end
Na pasta library-system, execute:

bash
Copiar código
./mvnw spring-boot:run
O back-end estará disponível em http://localhost:8080.

4. Configurar o Front-end
4.1. Instalar dependências
Na pasta library-frontend, execute:

bash

npm install

4.2. Rodar o Front-end
Ainda na pasta library-frontend, execute:

bash

npm start
O front-end estará disponível em http://localhost:3000.

📊 Estrutura do Banco de Dados
Tabela principal: books

Campo	Tipo	Descrição
id	INT (PK)	ID único do livro
title	VARCHAR(255)	Título do livro
author	VARCHAR(255)	Autor do livro
genre	VARCHAR(255)	Gênero do livro
image_url	VARCHAR(255)	URL da imagem do livro

📌 Contribuindo
Sinta-se à vontade para contribuir! Faça um fork do projeto, crie uma branch para sua modificação e envie um pull request.

