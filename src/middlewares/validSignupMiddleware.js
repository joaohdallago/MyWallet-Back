import signupSchema from '../schemas/signupSchema.js';

const validSignupMiddleware = async (req, res, next) => {
  const signup = req.body;

  const validation = signupSchema.validate(signup);

  if (validation.error) return res.status(422).send('O cadastro enviado não está em um formato válido!');

  return next();
};

export default validSignupMiddleware;
