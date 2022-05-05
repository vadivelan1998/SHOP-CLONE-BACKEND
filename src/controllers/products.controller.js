const Product = require("../models/products.model");
const express = require("express");

const router = express.Router();

router.get("/:cat", async (req, res) => {
  // try {

  //   const products = await Product.find({Category:req.params.cat}).lean().exec();
  //   return res.status(200).send(products);
  // } catch (error) {
  //   return res.status(400).send(error);
  // }
   try {
    //  var cat=req.params.id
    //  console.log(cat)
     const page = req.query.page || 1;
     const pagesize = req.query.pagesize || 10;
     const skip = (page - 1) * pagesize;
     const product = await Product.find({ Category :req.params.cat})
       .skip(skip)
       .limit(pagesize)
       .lean()
       .exec();
     const totalpages = Math.ceil(
       (await Product.find().countDocuments()) / pagesize
     );
     return res.status(200).send({ product, totalpages });
   } catch (error) {
     return res.status(500).send(error.message);
   }
});

module.exports = router;
