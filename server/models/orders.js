import mongoose from "mongoose";
const orders = new mongoose.Schema(
  {useerid: {
    type: String,
    required: true,
  },
    products: [ ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
    },{ timestamps: true }
    
    )

    export default mongoose.model("orders", orders);