/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getUsers, postUsers } from './controllers/authController.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/users', postUsers);
app.get('/users', getUsers);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`aberto na porta ${port}`);
});
