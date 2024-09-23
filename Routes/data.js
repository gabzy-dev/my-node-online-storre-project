const express = require('express');
const router = express.Router();

router.get("/add-item",(req,res,next)=> {//allows request to move into the next middleware.
    //next should be called if we dont send a response.
    res.send("<form action ='product' method ='POST'><input type='text' name='title'/><button type='submit'>submit</button> </form>");
  
  });
  
  router.post("/product",(req,res,next)=> {
   res.redirect("/");
   console.log(req.body);
  })
  



module.exports = router;