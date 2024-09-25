const express = require('express');
const router = express.Router();
const path = require("path");


router.get("/add-product",(req,res,next)=> {//allows request to move into the next middleware.
    //next should be called if we dont send a response.
    res.sendFile(path.join(__dirname, "../","Views","Add-product.html"));
  
  });


  
  router.post("/add-product",(req,res,next)=> {
   res.redirect("/");
   console.log(req.body);
  })
  



module.exports = router;