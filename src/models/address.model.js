const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: false },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    postal: { type: String, required: true },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Address = mongoose.model("address", addressSchema);
module.exports = Address;
