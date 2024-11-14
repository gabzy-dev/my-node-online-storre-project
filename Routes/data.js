const express = require('express');
const router = express.Router();
// const path = require("path");
const adminController = require('../Controllers/admin')


router.get("/add-product",adminController.getAddProduct);
// router.get('/products')
router.post("/add-product",adminController.postAddProduct);

router.get("/products",adminController.getProducts);
  
  // exports.routes = router;
  



module.exports = router;