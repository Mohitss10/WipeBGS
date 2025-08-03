import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import connectDB from './configs/mongodb.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  await connectDB();
  res.send("Hello from Vercel + Express (Serverless)");
});

// Export as serverless function
export const handler = serverless(app);
