import express from 'express';
const app = express();

import path from 'path';

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
import transactionRouter from './routes/transactionRoutes.js';

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/transactions',transactionRouter);


// static files read
app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*', (req,res) =>
{
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
});

const PORT = process.env.PORT;

app.listen(PORT , () =>
{
    console.log(`server running on port ${PORT}`);
})
