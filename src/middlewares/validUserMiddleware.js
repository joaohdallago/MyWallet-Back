import newUserSchema from '../schemas/newUserSchema.js';

const validUserMiddleware = async (req, res, next) => {
  const newUser = req.body;

  const validation = newUserSchema.validate(newUser);

  if (validation.error) return res.sendStatus(422);

  return next();
};

export default validUserMiddleware;
