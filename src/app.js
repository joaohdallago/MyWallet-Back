/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import usersRouter from './routers/usersRouter.js';
import sessionsRouter from './routers/sessionsRouter.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(usersRouter);
app.use(sessionsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`aberto na porta ${port}`);
});
