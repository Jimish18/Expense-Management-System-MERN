import { User } from "../models/UserModel.js";
import { Transaction } from "../models/TransactionModel.js";
import mongoose from "mongoose";

// Get All Transactions
export const getAllTransactionsController = async (req,res) =>
{
    const {id} = req.params;
    try
    {
        const allTransactions = await User.findById({_id:id},{transactions:1}).populate({path:'transactions',model:'transactions'}).sort({createdAt:-1});
        const orderedAllTransactions = allTransactions.transactions.reverse();

        res.status(200).json(
            {
                success : true,
                orderedAllTransactions
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
    const {id} = req.params;
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

        let objId =  new mongoose.Types.ObjectId(savedTransaction._id);        

        const updateTransaction = await User.findByIdAndUpdate(
            {_id:id},
            {
                $push :
                {
                    transactions :objId 
                }
            },
            {upsert:false,new:true}
        )

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
        const { uid , pid} = req.params;
        
        const deletedTransaction = await User.findById({_id:uid}).populate({path:'transactions',model:'transactions'});

        let updatedTransactions = deletedTransaction.transactions.filter((tr) =>
        {
            return tr._id != pid;
        })

        const savedTransaction = await User.findByIdAndUpdate({_id:uid},
            {
                transactions : updatedTransactions
            },{new : true});

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