const mongoose = require("mongoose");
const productCareSchema = new mongoose.Schema(
  {
    imageurl: { type: String, required: true },
    Category: { type: String, required: true },
    Brand: { type: String, required: true },
    Name: { type: String, required: true },
    price: { type: Number, required: true },
    typeofproduct: { type: String, required: true },
    Manufacturer: { type: String, required: false },
    styleType: { type: String, required: false },
    sizeorigin: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productCareSchema);
module.exports = Product;
