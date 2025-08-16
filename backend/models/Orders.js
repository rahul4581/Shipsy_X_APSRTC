// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  busNumber: { type: String, required: true },
  route: { type: String, required: true },
  refrigerated: { type: Boolean, default: false },
  departureTime: { type: String, required: true }, // e.g., "10:30 AM"
  arrivalTime: { type: String, required: true }    // e.g., "04:45 PM"
});

export default mongoose.model("Order", orderSchema);
