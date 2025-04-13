const user = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user

exports.register = async (req, res) => {
    const {name, email, password, role}= req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({
            name,
            email,
            password: hashedPassword,
            role,
        });

        await newUser.save();
        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.login = async (req, res) => {
    const {email, password}= req.body;

    try{
        const existingUser = await user.findOne({email});
        if(!existingUser) return res.status(400).json({message: "Invalid credentials"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id, role: existingUser.role}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.json({result: existingUser, token});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}