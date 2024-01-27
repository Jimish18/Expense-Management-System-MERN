import { Transaction } from "../models/TransactionModel.js";

// Get All Transactions
export const getAllTransactionsController = async (req,res) =>
{
    try
    {
        const allTransaction = await Transaction.find().sort({createdAt : -1});


        res.status(200).json(
            {
                success : true,
                allTransaction
            }
        )
    }
    catch(error)
    {
        res.status(404).json(
            {
                success : false,
                message : error.message
            }
        )
    }
}

// get recent Transacations
export const getRecentTransactionsController = async (req,res) =>
{
    try
    {
        const recentTransaction = await Transaction.find().sort({createdAt : -1}).limit(5);


        res.status(200).json(
            {
                success : true,
                recentTransaction
            }
        )
    }
    catch(error)
    {
        res.status(404).json(
            {
                success : false,
                message : error.message
            }
        )
    }
}

// Create a Transaction
export const createTransactionController = async (req,res) =>
{
    try
    {
        const {type , amount , description } = req.body;

        const newTransaction = new Transaction(
            {
                type,
                amount,
                description
            }
        );

        const savedTransaction = await newTransaction.save();

        res.status(200).json(
            {
                success : true,
                savedTransaction
            }
        )
    }
    catch(error)
    {
        res.status(500).json(
            {
                success : false,
                message : error.message
            }
        )
    }
}

// Delete a Transaction
export const deleteTransactionController = async (req,res) =>
{
    try
    {
        const { id } = req.params;
        
        const deletedTransaction = await Transaction.findByIdAndDelete({_id : id});

        res.status(200).json(
            {
                success : true,
                deletedTransaction
            }
        )
    }
    catch(error)
    {
        res.status(500).json(
            {
                success : false,
                message : error.message
            }
        )
    }
}