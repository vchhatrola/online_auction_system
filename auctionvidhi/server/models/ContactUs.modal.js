import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
 message: { type: String, required: true}
});

const ContactUsModel = mongoose.model("ContactUs", ContactUsSchema);

export { ContactUsModel as ContactUs };