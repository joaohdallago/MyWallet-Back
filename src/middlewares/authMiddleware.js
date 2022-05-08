import db from '../db.js';

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  const session = await db.collection('sessions').findOne({ token });
  if (!session) return res.status(401).send('Você não está logado!');
  res.locals.session = session;

  return next();
};

export default authMiddleware;
