const Product = require('../Models/product')
// const products = [];

   exports.getAddProduct = (req,res,next)=> {//allows request to move into the next middleware.
    //next should be called if we dont send a response.
    res.render('add-product',{pageTitle: "Add-product page",path: "/admin/add-product"})
  }
    exports.postAddProduct = (req,res,next)=> {
      const product = new Product(req.body.title)
      product.save();
    res.redirect("/");
   }

   exports.getShop = (req,res,next)=> {
    // const products = adminData.products;
    Product.fetchAll((products)=>{
   res.render('shop',{prods:products, pageTitle:'Shop',path: "/"});
    })
     
    }

    exports.showError =(req,res,next)=> {
      res.status(404).render('404',{pageTitle:"Error Page",path:req.path});
      // console.log(path)
    };
  

