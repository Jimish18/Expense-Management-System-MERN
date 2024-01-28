import express from 'express';
import 
{ 
    createTransactionController, 
    deleteTransactionController, 
    getAllTransactionsController
} from '../controllers/transactionController.js';

const transactionRouter = express.Router();


// Routes

// GET - get all transactions
transactionRouter.get('/all/:id',getAllTransactionsController);
// transactionRouter.get('/recent',getRecentTransactionsController);

// POST - create a Transaction
transactionRouter.post('/create/:id',createTransactionController);

// DELETE - delete a Transacation
transactionRouter.delete('/delete/:id',deleteTransactionController);

export default transactionRouter;