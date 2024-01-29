import { User } from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config();

export const registerController = async (req,res) =>
{
    try
    {
        const {name , email , password , profession} = req.body;

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password,salt);

        const newUser = new User(
            {
                name,
                email,
                password : hashPassword,
                profession
            }
        );

        const savedUser = await newUser.save();

        res.status(201).json(
            {
                success : true,
                savedUser
            }
        )
    }
    catch(error)
    {
        res.status(500).json(
            {
                success : false,
                error : error.message
            }
        )
    }
}

export const loginController = async (req,res) =>
{
    try
    {
        const {email,password} = req.body;

        const user = await User.findOne({email : email});

        if(!user)
        {
            res.status(400).json(
                {
                    success : false,
                    message : "User doesn't exist"
                }
            )
        }

        const isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch)
        {
            res.status(400).json(
                {
                    success : false,
                    message : "Invalid Credentials !!"
                }
            )
        }
        

        const token = jwt.sign({id : user._id} , process.env.JWT_SECRET);

        delete user.password;

        res.status(200).json(
            {
                success : true,
                user,
                token
            }
        )

    }
    catch(error)
    {
        res.status(400).json(
            {
                success : false,
                error
            }
        )
    }
}