import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: false },
  phone: { type: String, required: false },
});

const Customer = mongoose.model("customer", CustomerSchema);

export default Customer;
