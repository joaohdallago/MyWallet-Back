/* eslint-disable no-console */

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
} catch (error) {
  console.log(error);
}
const db = mongoClient.db(process.env.DATABASE_NAME);

export default db;
