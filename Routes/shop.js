const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require ('../Util/Path');
const adminData = require("./data");


router.get('/',(req,res,next)=> {
  const products = adminData.products;
    res.render('Shop',{prods:products, pageTitle:'Shop',path: "/"});
  })


module.exports = router;

 