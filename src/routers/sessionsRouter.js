import { Router } from 'express';

import findUserMiddleware from '../middlewares/findUserMiddleware.js';
import validLoginMiddleware from '../middlewares/validLoginMiddleware.js';
import alreadyLoggedinMiddleware from '../middlewares/alreadyLoggedinMiddleware.js';

import { getSessions, postSessions } from '../controllers/sessionsController.js';

const sessionsRouter = Router();

sessionsRouter.post('/sessions', validLoginMiddleware, findUserMiddleware, alreadyLoggedinMiddleware, postSessions);
sessionsRouter.get('/sessions', getSessions);

export default sessionsRouter;
