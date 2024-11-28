const express = require('express');
const router = express.Router();
// const path = require('path');
// const rootDir = require ('../Util/Path');
// const adminData = require("./data");
const shopController = require('../Controllers/shop')


router.get('/',shopController.getIndex);
router.get('/cart',shopController.getCart);
router.get('/products', shopController.getProducts);
router.get('/checkout',shopController.getCheckout);
router.get('/orders', shopController.getOrders)
module.exports = router;

 