import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

import express from 'express';
const app = express();

import Run from './connectDB.js';
import User from './models/User.js';

import cors from 'cors';
 app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
  res.send(`it's working`);
});
app.get('/api/v1/users', async (req, res) => {
  try {
    const user = await User.find({}).exec();
    res.status(201).json({user});
  } catch (err) {
    console.error(`Error: ${err.message}`);
    res.status(500);
  }
});
app.post('/api/v1/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    res.status(500);
  }
});
const Start = async () => {
  try {
    await Run()
    app.listen(PORT, () => {
      console.log(`Server runing on port: ${PORT}`)
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
Start();
