const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require ('../Util/Path');
const adminData = require("./data");


router.get('/',(req,res,next)=> {
  console.log(adminData.products);
    res.sendFile( path.join( rootDir,'Views',"Shop.html") );
  })


module.exports = router;

 