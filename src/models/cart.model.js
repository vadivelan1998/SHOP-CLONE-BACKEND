const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    imageurl: { type: String, required: false },
    Category: { type: String, required: false },
    Brand: { type: String, required: false },
    Name: { type: String, required: false },
    price: { type: Number, required: false },
    typeofproduct: { type: String, required: false },
    Manufacturer: { type: String, required: false },
    styleType: { type: String, required: false },
    sizeorigin: { type: String, required: false },
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