import bcrypt from 'bcrypt';
import db from '../db.js';

export const postUsers = async (req, res) => {
  const signup = req.body;
  const encryptedPassword = bcrypt.hashSync(signup.password, 10);

  try {
    await db.collection('users').insertOne({ ...signup, password: encryptedPassword, transactions: [] });

    return res.sendStatus(201);
  } catch (error) {
    return res.send(error);
  }
};

export const getUsers = async (req, res) => {
  const { session } = res.locals;
  try {
    const user = await db.collection('users').findOne({ _id: session.userId });

    if (!user) return res.status(401).send('Este usuário não está cadastrado!');

    delete user._id;
    delete user.password;

    return res.send(user);
  } catch (error) {
    return res.send(error);
  }
};
