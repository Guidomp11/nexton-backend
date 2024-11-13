import dotenv from 'dotenv'; 
dotenv.config();

import express from 'express';
import { PORT } from './config';

import { mathRouter } from './routes/index.routes';

const app = express();

app.use(express.json());

app.use('/api/math', mathRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});