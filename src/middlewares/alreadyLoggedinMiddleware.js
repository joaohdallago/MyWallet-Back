/* eslint-disable no-underscore-dangle */

import db from '../db.js';

const alreadyLoggedinMiddleware = async (req, res, next) => {
  const { user } = res.locals;

  try {
    const session = await db.collection('sessions').findOne({ userId: user._id });
    if (session) return res.status(406).send('Esse usuário já está logado!');
  } catch (error) {
    return res.send(error);
  }

  return next();
};

export default alreadyLoggedinMiddleware;
