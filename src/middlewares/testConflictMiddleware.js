import db from '../db.js';

const testConflictMiddleware = async (req, res, next) => {
  const newUser = req.body;

  const user = await db.collection('users').findOne({ email: { $regex: new RegExp(`^${newUser.email}$`) } });

  if (user) return res.sendStatus(409);

  return next();
};

export default testConflictMiddleware;
