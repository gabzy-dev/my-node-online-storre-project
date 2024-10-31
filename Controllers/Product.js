const products = [];

   exports.getAddProduct = (req,res,next)=> {//allows request to move into the next middleware.
    //next should be called if we dont send a response.
    res.render('add-product', {pageTitle: "Add-product page",path:"/admin/add-product"})
  }
    exports.postAddProduct = (req,res,next)=> {
    res.redirect("/");
    products.push({title: req.body.title});
   }

   exports.getShop = (req,res,next)=> {
    // const products = adminData.products;
      res.render('Shop',{prods:products, pageTitle:'Shop',path: "/"});
    }
  

