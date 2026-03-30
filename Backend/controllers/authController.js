import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) =>{
    const {name, email, password} = req.body;

    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({message: "User Exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name, 
        email,
        password: hashedPassword,
    });

    res.json(user);
};

export const login = async (req, res) =>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message: "Invalid Credentials !!"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid Credentials"});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    res.json({token})

};

