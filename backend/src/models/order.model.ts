import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "manager",
    required: true,
  },
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "menu", required: true },
  sumPrice: { type: Number, required: true },
  status: { type: String, default: "ordered" },
  pickupTime: { type: String, required: false },
  pickupDate: { type: Date, required: false },
});

const Order = mongoose.model("order", OrderSchema);

export default Order;
