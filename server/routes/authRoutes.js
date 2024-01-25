import express from 'express';

const authRouter = express.Router();

import { loginController , registerController } from '../controllers/authController.js';

// Routes
// POST - LOGIN USER
authRouter.post('/login',loginController);

// POST - REGISTER USER
authRouter.post('/register',registerController);

export default authRouter;


