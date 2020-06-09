import express, { query } from 'express';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Busca dados de um usuário com ID 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização




/* Código abaixo foi utilizado para exemplificar as api's */
const users = ['Diego', 'Cleiton', 'Robson', 'teste'];

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search? users.filter(user => user.includes(search)) : users;

  response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  response.json(users[id]);
});

app.post('/users', (request, response) => {
  const data = request.body;

  response.json(data);
});

app.use(errors());

app.listen(3333);