const Product = require("../models/products.model");
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const products = await Product.find({}).lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
