const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    imageurl: { type: String, required: true },
    Name: { type: String, required: true },
    Brand: { type: String, required: true },
    price: { type: Number, required: true },
    typeofproduct: { type: String, required: true },
    category: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;