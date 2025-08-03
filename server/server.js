import 'dotenv/config'              // Loads environment variables from .env
import express from 'express'       // Import Express framework
import cors from 'cors'             // Enable Cross-Origin Resource Sharing
import connectDB from './configs/mongpdb.js';

const PORT = process.env.PORT || 4000;
const app = express();
await connectDB()

// Middlewares
app.use(express.json());  // Parses incoming JSON requests
app.use(cors());          // Enables CORS

// Simple API route
app.get('/', (req, res) => res.send("API Working"));

// Start server
app.listen(PORT, () => console.log("Server Running on port " + PORT));
