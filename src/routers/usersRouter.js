import { Router } from 'express';
import { getUsers, postUsers } from '../controllers/usersController.js';

import validUserMiddleware from '../middlewares/validUserMiddleware.js';
import testConflictMiddleware from '../middlewares/testConflictMiddleware.js';

const usersRouter = Router();

usersRouter.post('/users', validUserMiddleware, testConflictMiddleware, postUsers);
usersRouter.get('/users', getUsers);

export default usersRouter;
