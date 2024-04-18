import mongoose from "mongoose";

const AuctionImageSchema = new mongoose.Schema({
    auction: { type: mongoose.Schema.Types.ObjectId, ref: 'AuctionTest', required: true }, // Reference to AuctionTestModel
    image: { type: String, required: true },
});

const AuctionImageModal = mongoose.model("AuctionImage", AuctionImageSchema);

export { AuctionImageModal as AuctionImage };