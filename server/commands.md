



### Inicialiar o projeto node
npm init -y

### git commands
git add .

git remote add origin https://github.com/asonac/nlw-01.git


### Instalação do pacote do express
npm install express

### Definição de tipos do express (Só para o ambiente de desenvolvimento)
npm install @types/express -D

### Instalação do pacote ts-node
npm install ts-node -D

### Instalar o typescript
npm install typescript -D

### usar npx para executar scripts do node
npx ts-node src/server.ts

### Criação do arquivo de configuração do typescript
npx tsc --init
e executa novamente npx ts-node src/server.ts

### Instalacao do nodemon
npm install ts-node-dev -D

### Comando para executar o servidor
npx ts-node-dev src/server.ts

### Para rodar o script
npm run dev

### ORM Knex
npm install knex

### Sqlite3
npm install sqlite3

### Run migrations
npx knex migrate:latest --knexfile knexfile.ts migrate:latest 

### Adicionar os dados default da tabela items
npm run knex:seed

### Cors
npm install cors

### upload de arquivos
npm install multer

npm install @types/multer -D

### validação de dados
npm install celebrate

npm install @types/hapi__joi -D