import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no bakc-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação doback-end

//Request Param: Parametros que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais que filtros
//Request Body: Parametros para criação/atualização de informações

//SELECT * FROM users WHERE name = 'Diego'
//knex('users').where('name', 'Diego').select('*')