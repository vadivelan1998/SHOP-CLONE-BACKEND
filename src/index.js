
const cors=require("cors");

const express = require("express");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());
 app.use(cors())

const { register, login } = require("./controllers/auth.controller");

 
const productController = require("./controllers/products.controller"); 
const addressController = require("./controllers/address.controller"); 
const cartController=require("./controllers/cart.controller")



//__dirname+"/view/home.html
// app.get("/",(req,res)=>{
// res.send("welcome Nykaaman.com clone")
// })

app.post("/register", register);
app.post("/login", login);



app.use("/products", productController);
//app.use("/products/:id", productController);
app.use("/addresses",addressController);
app.use("/carts",cartController)


module.exports = app;
