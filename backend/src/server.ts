import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

// Rota = conjunto
// Recurso = /users

// Parâmetros
// Query params: Enviados na rota (localhost:3333/users?search=rodrigo&page=3)
// Route params: Usado para identificar um recurso. Torna obrigatório a presença. (http://localhost:3333/users/1)
// Body: Envia dados específicos. 


app.listen(3333)