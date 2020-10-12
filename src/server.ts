import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// get -> Buscar ou listar uma informação
// post -> Criar alguma nova informação
// put -> Atualizar uma informação existente
// delete -> Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params:Identificar qual recurso eu quero atualizar ou deletar (prefixo :)
// Query Params: Paginação, filtros, ordenação (prefixo ?)

//localhost:3333

app.use(routes);

app.listen(3333);

