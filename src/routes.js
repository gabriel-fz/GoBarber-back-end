import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// rota de criação de usuário
routes.post('/users', UserController.store);

// rota de autenticação de usuário
routes.post('/sessions', SessionController.store);

// middleware global de autenticação
routes.use(authMiddleware);

// rota de alteração de usuário
routes.put('/users', UserController.update);

// rote de upload de imagem
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
