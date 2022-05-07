import bcrypt from 'bcrypt';

import db from '../db.js';

const findUserMiddleware = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await db.collection('users').findOne({ email: { $regex: new RegExp(`^${email}$`) } });
  res.locals.user = user;

  if (!user || !bcrypt.compareSync(password, user.password)) return res.status(401).send('Email ou senha inválidos!');

  return next();
};

export default findUserMiddleware;
