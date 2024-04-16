import express from 'express'
const router = express.Router();
import {Admin} from '../models/Admin.modal.js'
import {User} from '../models/User.js'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


router.post('/Adminlogin', async (req, res) => {
    console.log(req.body,"adminlogin")
    const { email, password } = req.body
    const user = await Admin.findOne({ email,password })
    if (!user) {
      return res.json({ message: "Admin is not registered" })
    }
  
    // const validPassword =  password== Admin.password
    // if (!validPassword) {
    //   return res.json({ message: "Password is incorrect." })
    // }
  
    const token = jwt.sign({ adminname: Admin.adminname }, process.env.KEY, { expiresIn: '1h' }) //3h
    res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
    return res.json({ status: true, message: "Login is successfully." })
  })

  router.get('/getUsers', async (req, res) => {
    try {
        const userList = await User.find();
        return res.json({ status: true, userList : userList });
    } catch (error) {
        return res.status(500).json({ status: false, message: 'Failed to fetch Users.', error: error.message });
    }
  });

  router.get('/deleteUser/:id', async (req, res) => {
    const userId = req.params.id; // Correctly access the user's ID from the URL params
    try {
        const deletedUser = await User.findByIdAndDelete(userId); // Use findByIdAndDelete to delete the user
        if (!deletedUser) {
            return res.status(404).json({ status: false, message: "User not found." });
        }
        return res.json({ status: true, message: "User deleted successfully." });
    } catch (error) {
        return res.status(500).json({ status: false, message: 'Failed to delete user.', error: error.message });
    }
});


  export { router as AdminRouter }