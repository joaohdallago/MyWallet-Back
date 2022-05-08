import { Router } from 'express';

import validSignupMiddleware from '../middlewares/validSignupMiddleware.js';
import alreadySignedupMiddleware from '../middlewares/alreadySignedupMiddleware.js';

import authMiddleware from '../middlewares/authMiddleware.js';

import { getUsers, postUsers } from '../controllers/usersController.js';

const usersRouter = Router();

usersRouter.post('/users', validSignupMiddleware, alreadySignedupMiddleware, postUsers);
usersRouter.get('/users', authMiddleware, getUsers);

export default usersRouter;
