const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require ('../Util/Path');


router.get('/',(req,res,next)=> {
    res.sendFile( path.join( rootDir,'Views',"Shop.html") );
  })




module.exports = router;

 