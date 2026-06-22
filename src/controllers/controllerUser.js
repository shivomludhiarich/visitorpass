const User=require("../models/user.js");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const registerUser = async(req,res) => {
    try{
        const saltRounds=10;
        const user= await User.create({
            name : req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password,saltRounds),
            role: req.body.role
        })

        res.status(201).json({id: user._id,name: user.name, email: user.email, role: user.role});
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    };

}

const loginUser= async(req,res) => {
    try{
        const user= await User.findOne({ email : req.body.email});

        if(!user){
            return res.status(401).json( {message: "Invalid credentials"});
        }

        const comp= await bcrypt.compare(req.body.password,user.password);

        if(!comp){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const token= jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(202).json({token: token});



    }catch(error){
        res.status(500).json({message : error.message});
    }
};

module.exports= {registerUser,loginUser};