const express = require('express');
const router = express.Router();
const path = require('path');
// const rootDir = require ('../Util/Path');
// const adminData = require("./data");
const getShopController = require('../Controllers/Product')

router.get('/', getShopController.getShop)


module.exports = router;

 