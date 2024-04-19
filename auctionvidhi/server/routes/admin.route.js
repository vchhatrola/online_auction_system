import express from 'express'
const router = express.Router();
import { Admin } from '../models/Admin.modal.js'
import { AuctionTest } from '../models/AuctionDetail.modal.js'
import { AuctionBid } from '../models/AuctionBid.modal.js'
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

router.post('/Adminlogin', async (req, res) => {
  console.log(req.body, "adminlogin")
  const { email, password } = req.body
  const user = await Admin.findOne({ email, password })
  if (!user) {
    return res.json({ message: "Admin is not registered" })
  }
  const token = jwt.sign({ adminname: Admin.adminname }, process.env.KEY, { expiresIn: '12h' })
  res.cookie('token', token, { httpOnly: true, maxAge: 360000 })
  return res.json({ status: true, message: "Login is successfully." })
})

router.get('/getUsers', async (req, res) => {
  try {
    const userList = await User.find();
    return res.json({ status: true, userList: userList });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Failed to fetch Users.', error: error.message });
  }
});

router.get('/deleteUser/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ status: false, message: "User not found." });
    }
    return res.json({ status: true, message: "User deleted successfully." });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Failed to delete user.', error: error.message });
  }
});

router.post('/auctionBid', async (req, res) => {
  const {
    username,
    price,
    auctionId,
    isSell,
  } = req.body;
  const user = await User.findOne({ username });

  let userId = user._id
  const auctionBid = new AuctionBid({
    username,
    price,
    isSell,
    userId,
    auctionId,
  });
  const updatedAuction = await AuctionTest.findByIdAndUpdate(auctionId, {
    isSell:true
  }, { new: true });

  if (!updatedAuction) {
    return res.status(404).json({ status: false, message: 'Auction not found.' });
  }
  await auctionBid.save();
  return res.json({ status: true, message: 'auctionBid is submited.' });
});

router.get('/totalCount', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalAuction= await AuctionTest.countDocuments();
    const totalAuctionBid= await AuctionBid.countDocuments();
    return res.json({ status: true, totalCount: {totalUsers:totalUsers,totalAuction:totalAuction,totalAuctionBid:totalAuctionBid} });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Failed to fetch total users.', error: error.message });
  }
});


export { router as AdminRouter }