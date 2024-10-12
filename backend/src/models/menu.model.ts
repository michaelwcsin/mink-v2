import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  availability: { type: Boolean, required: true },
  image: { type: String, required: false },
});

const Menu = mongoose.model("menu", MenuSchema);

export default Menu;
