import mongoose, { mongo } from "mongoose";

const TransactionSchema = new mongoose.Schema(
    {
        type :
        {
            type : String,
            required : true
        },
        amount :
        {
            type : Number,
            required : true
        },
        description :
        {
            type : String,
            required : true
        }
    }
    ,
    {
        timestamps : true
    }
)

export const Transaction = mongoose.model('transaction',TransactionSchema);