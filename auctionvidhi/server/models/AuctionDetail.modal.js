
import mongoose from "mongoose";

const AuctionTestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  model: { type: String, required: false },
  description: { type: String,required: false},
  condition: { type: String, required: true },
  auctionDate: { type: Date, required: true },
  isSell: { type: Boolean, required: true,default:false  },
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AuctionImage' }],
  bidPrice: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AuctionBid' }]
 
});
AuctionTestSchema.virtual('formattedDate').get(function() {
  const date = this.auctionDate;
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month < 10 ? '0' + month : month}-${year}`;
});
const AuctionTestModel = mongoose.model("Auction", AuctionTestSchema);

export { AuctionTestModel as AuctionTest };