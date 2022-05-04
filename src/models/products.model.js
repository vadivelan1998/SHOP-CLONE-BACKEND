const mongoose = require("mongoose");
const skinCareSchema = new mongoose.Schema(
  {
    img_url: { type: String, required: true },
    title: { type: String, required: true },
    striked_price: { type: String, required: true },
    price: { type: Number, required: true },
    off: { type: String, required: true },
    value: { type: String, required: true },
    category: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Skin = mongoose.model("skin", skinCareSchema);
module.exports = Skin;
