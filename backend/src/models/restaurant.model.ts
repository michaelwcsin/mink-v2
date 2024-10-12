import mongoose, { mongo } from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: false },
  image: { type: String, required: false },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "manager",
    required: true,
  },
  menu: { type: mongoose.Schema.Types.ObjectId, ref: "menu", required: true },
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);

export default Restaurant;
