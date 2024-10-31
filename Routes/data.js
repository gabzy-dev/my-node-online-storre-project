const express = require('express');
const router = express.Router();
const path = require("path");
const productController = require('../Controllers/Product')


router.get("/add-product",productController.getAddProduct);


  router.post("/add-product",productController.postAddProduct)
  
  // exports.routes = router;
  



module.exports = router;