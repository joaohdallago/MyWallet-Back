/* eslint-disable no-underscore-dangle */

import { v4 as uuid } from 'uuid';
import db from '../db.js';

export const postSessions = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await db.collection('users').findOne({ email });

    const token = uuid();

    await db.collection('sessions').insertOne({
      userId: user._id,
      token,
    });

    return res.send(token);
  } catch (error) {
    return res.send(error);
  }
};

export const getSessions = async (req, res) => { // dev
  try {
    const sessions = await db.collection('sessions').find().toArray();

    return res.send(sessions);
  } catch (error) {
    return res.send(error);
  }
};
