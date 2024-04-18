import express from 'express'
const router = express.Router();
import { AuctionTest } from '../models/AuctionDetail.modal.js'

router.post('/createAuction', async (req, res) => {
  console.log(req.body, "req..")
  const {
    title,
    image,
    price,
    model,
    description,
    condition,
    auctionDate,
    auctionTime
  } = req.body;

  const newAuctionTest = new AuctionTest({
    title,
    image,
    price,
    model,
    description,
    condition,
    auctionDate,
    auctionTime
  });

  await newAuctionTest.save();
  return res.json({ status: true, message: 'Auction added successfully.' });
});
// GET route to fetch all auctions
router.get('/getAuction', async (req, res) => {
  try {
    const auctions = await AuctionTest.find();
    return res.json({ status: true, auctions: auctions });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Failed to fetch auctions.', error: error.message });
  }
});
router.get('/deleteAuction/:id', async (req, res) => {
  const auctionId = req.params.id; 
  try {
    const deletedAuction = await AuctionTest.findByIdAndDelete(auctionId); 
    if (!deletedAuction) {
      return res.status(404).json({ status: false, message: "Product not found." });
    }
    return res.json({ status: true, message: "Product deleted successfully." });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Failed to delete Product.', error: error.message });
  }
});

router.get('/getAuction/:id', async (req, res) => {
  try {
    const auction = await AuctionTest.findById(req.params.id);
    if (!auction) {
      return res.status(404).json({ status: false, message: 'Auction not found.' });
    }
    return res.json({ status: true, data: auction });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Failed to fetch auction.', error: error.message });
  }
});


router.post('/updateAuction/:id', async (req, res) => {
  const auctionId = req.params.id;
  const {
    title,
    price,
    model,
    condition,
    auctionDate
  } = req.body;

  try {
    const updatedAuction = await AuctionTest.findByIdAndUpdate(auctionId, {
      title,
      price,
      model,
      condition,
      auctionDate
    }, { new: true });

    if (!updatedAuction) {
      return res.status(404).json({ status: false, message: 'Auction not found.' });
    }

    return res.json({ status: true, message: 'Auction updated successfully.', data: updatedAuction });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'Failed to update auction.', error: error.message });
  }
});

export { router as AuctionRouter }
