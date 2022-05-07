import loginSchema from '../schemas/loginSchema.js';

const validLoginMiddleware = (req, res, next) => {
  const login = req.body;

  const validation = loginSchema.validate(login);

  if (validation.error) return res.status(422).send('O login enviado está em um formato inválido!');

  return next();
};

export default validLoginMiddleware;
