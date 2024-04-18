
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  adharCardNumber: { type: String, required: true, unique: true },
  role: { type: String, required: true, default: 'user' },
 
});

const UserModel = mongoose.model("Userdata", UserSchema);

export { UserModel as User };