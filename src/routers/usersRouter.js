import { Router } from 'express';
import { getUsers, postUsers } from '../controllers/usersController.js';
import validUserMiddleware from '../middlewares/validUserMiddleware.js';

const usersRouter = Router();

usersRouter.post('/users', validUserMiddleware, postUsers);
usersRouter.get('/users', getUsers);

export default usersRouter;
