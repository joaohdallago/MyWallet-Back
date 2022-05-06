import { Router } from 'express';
import { getUsers, postUsers } from '../controllers/usersController.js';

const usersRouter = Router();

usersRouter.post('/users', postUsers);
usersRouter.get('/users', getUsers);

export default usersRouter;
