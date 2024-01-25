import mongoose from "mongoose";

// Schema Design
const UserSchema = new mongoose.Schema(
    {
        name : 
        {
            type : String,
            required : [true,"Name is Required"]
        },
        email :
        {
            type : String,
            required : [true,"Email is required and should be unique"],
            unique : true
        },
        password : 
        {
            type : String,
            required : [true,"Password is Required"]
        },
        profession:
        {
            type : String,
            required : [true,"Profession is required"]
        }

    },
    {timestamps : true}
);

export const User = mongoose.model('users',UserSchema);