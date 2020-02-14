import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// rota de criação de usuário
routes.post('/users', UserController.store);

// rota de autenticação de usuário
routes.post('/sessions', SessionController.store);

// middleware global de autenticação
routes.use(authMiddleware);

// rota de alteração de usuário
routes.put('/users', UserController.update);

export default routes;
