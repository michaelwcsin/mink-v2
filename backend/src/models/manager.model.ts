import mongoose from "mongoose";

const ManagerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: false },
  phone: { type: String, required: false },
  restaurant: [
    { type: mongoose.Schema.Types.ObjectId, ref: "restaurant", required: true }, // Referencing to restaurant object id
  ],
});

const Manager = mongoose.model("managers", ManagerSchema);

export default Manager;
