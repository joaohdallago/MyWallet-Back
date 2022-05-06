import bcrypt from 'bcrypt';
import db from '../db.js';

export const postUsers = async (req, res) => {
  const newUser = req.body;
  const encryptedPassword = bcrypt.hashSync(newUser.password, 10);

  try {
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
