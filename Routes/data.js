const express = require('express');
const router = express.Router();
const path = require("path");
const rootDir = require('../Util/Path');
const products = [];

router.get("/add-product",(req,res,next)=> {//allows request to move into the next middleware.
    //next should be called if we dont send a response.
    res.sendFile(path.join(rootDir,"Views","Add-product.html"));
  
  });


  
  router.post("/add-product",(req,res,next)=> {
   res.redirect("/");
   products.push({title: req.body.title});
  })
  

  exports.routes = router;
  exports.products = products;



// module.exports = router;