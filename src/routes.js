import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

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

// rota de listagem de prestadores de serviço
routes.get('/providers', ProviderController.index);

// rota de listagem de horários disponíveis do dia
routes.get('/providers/:providerId/available', AvailableController.index);

// rota de listagem de agendamento
routes.get('/appointments', AppointmentController.index);

// rota de agendamento
routes.post('/appointments', AppointmentController.store);

// rota de cancelamento de agendamento
routes.delete('/appointments/:id', AppointmentController.delete);

// rota de listagem de agendamentos para o prestador
routes.get('/schedule', ScheduleController.index);

// rota de listagem de notificações de prestador de serviço
routes.get('/notifications', NotificationController.index);

// rota de marcar notificação como lida
routes.put('/notifications/:id', NotificationController.update);

// rota de upload de imagem
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
