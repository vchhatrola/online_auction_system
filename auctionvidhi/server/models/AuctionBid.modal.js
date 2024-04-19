import mongoose from "mongoose";

const AuctionBidSchema = new mongoose.Schema({
  auctionId: { type: mongoose.Schema.Types.ObjectId, ref: 'AuctionTest', required: true },
  userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Userdata', required: true },
  price: { type: String, required: true },
 });

const AuctionBidModal = mongoose.model("AuctionBid", AuctionBidSchema);

export { AuctionBidModal as AuctionBid };