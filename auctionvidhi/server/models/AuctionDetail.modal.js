
import mongoose from "mongoose";

const AuctionTestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  model: { type: String, required: false },
  description: { type: String,required: false},
  condition: { type: String, required: true },
  auctionDate: { type: Date, required: true },
  auctionTime: { type: String, required: true }
 
});

const AuctionTestModel = mongoose.model("Auction", AuctionTestSchema);

export { AuctionTestModel as AuctionTest };