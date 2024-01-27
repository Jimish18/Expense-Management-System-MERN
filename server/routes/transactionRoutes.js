import express from 'express';
import 
{ 
    createTransactionController, 
    deleteTransactionController, 
    getAllTransactionsController, 
    getRecentTransactionsController
} from '../controllers/transactionController.js';

const transactionRouter = express.Router();


// Routes

// GET - get all transactions
transactionRouter.get('/all',getAllTransactionsController);
transactionRouter.get('/recent',getRecentTransactionsController);

// POST - create a Transaction
transactionRouter.post('/create',createTransactionController);

// DELETE - delete a Transacation
transactionRouter.delete('/delete/:id',deleteTransactionController);

export default transactionRouter;