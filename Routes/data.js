const express = require('express');
const router = express.Router();
const path = require("path");
const rootDir = require('../Util/Path');
const productController = require('../Controllers/Product')
const products = [];

router.get("/add-product",productController.getAddProduct);


  router.post("/add-product",(req,res,next)=> {
   res.redirect("/");
   products.push({title: req.body.title});
  })
  
  exports.routes = router;
  exports.products = products;



// module.exports = router;