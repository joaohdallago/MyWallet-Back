import bcrypt from 'bcrypt';
import db from '../db.js';
import newUserSchema from '../schemas/newUserSchema.js';

export const postUsers = async (req, res) => {
  const newUser = req.body;

  const validation = newUserSchema.validate(newUser);

  if (validation.error) return res.sendStatus(422);

  const encryptedPassword = bcrypt.hashSync(newUser.password, 10);

  try {
    const user = await db.collection('users').findOne({ email: newUser.email });

    if (user) return res.sendStatus(409);

    await db.collection('users').insertOne({ ...newUser, password: encryptedPassword });

    return res.sendStatus(201);
  } catch (error) {
    return res.send(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await db.collection('users').find().toArray();

    return res.send(users);
  } catch (error) {
    return res.send(error);
  }
};
