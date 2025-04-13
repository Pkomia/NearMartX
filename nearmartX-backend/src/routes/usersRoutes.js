const express = require('express');
const router = express.Router();
const User = require('../models/User');  
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");

// Example route to get all users

router.get('/', async (req, res) => { 
    allUsers  = await User.find({});
    res.status(200).json(allUsers);
});

router.get("/:identifier", async (req, res) => {
    const identifier = req.params.identifier;
  
    try {
      let user;
  
      // Check if it's a valid ObjectId
      if (mongoose.Types.ObjectId.isValid(identifier)) {
        user = await User.findById(identifier);
      } else {
        // Otherwise, assume it's an email
        user = await User.findOne({ email: identifier });
      }
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  });

// Example route to create a new user 
router.post('/', async (req, res) => {
    // Logic to create a new user in the database 

    try{
       
        const {name, email, password, role, avatar} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new Error("User already exists");
            error.status = 400;
            throw error;
        }

        hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
            avatar
        });

        const createdUser = await newUser.save();

        res.status(201).json(createdUser);
    }
    catch(err){
        res.status(err.status).json({message: err.message});
    }
});

// Example route to update a user by ID
router.put('/:id', async (req, res) => {
    // Logic to update a user by ID in the database
    const userId = req.params.id;
    const {name, email, password, role, avatar} = req.body;
    try{
         user = await User.findById(userId);
         if(!user)
            return res.status(404).json({message: "User not found!"})

         if(name) user.name = name;
         if(email) user.email= email;
         if(password) user.password =await bcrypt.hash(password, 10);
         if(role) user.role = role;
         if(avatar) user.avatar= avatar;

         const updatedUser = await user.save();

         return res.status(201).json({
            message: "user updated successfully!",
            user: updatedUser
         })
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    } 
});

// Example route to delete a user by ID
router.delete('/:id', async (req, res) => {
    // Logic to delete a user by ID from the database
    const userId = req.params.id; 

    console.log(userId);

    try {
        const result = await User.findByIdAndDelete(userId);
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
});


module.exports = router;
