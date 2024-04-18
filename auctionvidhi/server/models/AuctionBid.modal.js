import mongoose from "mongoose";

const AuctionBidSchema = new mongoose.Schema({
  auctionId: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: String, required: true },
  isSell: { type: Boolean, required: true }
 });

const AuctionBidModal = mongoose.model("AuctionBid", AuctionBidSchema);

export { AuctionBidModal as AuctionBid };