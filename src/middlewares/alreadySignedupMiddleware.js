import db from '../db.js';

const alreadySignedUpMiddleware = async (req, res, next) => {
  const newUser = req.body;

  const user = await db.collection('users').findOne({ email: { $regex: new RegExp(`^${newUser.email}$`) } });

  if (user) return res.status(409).send('Esse email já foi registrado!');

  return next();
};

export default alreadySignedUpMiddleware;
