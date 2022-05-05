const Cart = require("../models/cart.model");
const express = require("express");
const authenticate = require("../middlewares/authenticate");
const Product=require("../models/products.model")
const router = express.Router();

router.post("/",authenticate ,async (req, res) => {
  try {
   req.body.userId = req.user;
 
     const cart = await Cart.create(req.body);
     console.log("carttttttttt",cart)
      return res
       .status(200)
     .send({message:"Added to cart Successfully"});
    
  } catch (error) {
    return res.status(400).send(error);
  }
});
router.get("", authenticate, async (req, res) => {
  try {
    req.body.userId = req.user;
    const cart = await Cart.find({ userId: req.body.userId }).lean().exec();
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
});
router.delete("/:id", authenticate, async (req, res) => {
  try {
    req.body.userId = req.user;
    await Cart.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "item deleted" });
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
