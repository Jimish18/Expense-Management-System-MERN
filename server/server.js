import express from 'express';
const app = express();

import dotenv from "dotenv";
dotenv.config();

import cors from "cors"
import morgan from 'morgan';

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// database Connection 
import '../server/config/db.js';

// Accessing Route Files
import authRouter from './routes/authRoutes.js';

app.use('/auth', authRouter);

const PORT = process.env.PORT;

app.listen(PORT , () =>
{
    console.log(`server running on port ${PORT}`);
})
