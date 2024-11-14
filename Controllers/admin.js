const Product = require('../Models/product')
exports.getAddProduct = (req,res,next)=> {//allows request to move into the next middleware.
    //next should be called if we dont send a response.
    res.render('admin/add-product',{pageTitle: "Add-product page",path: "/admin/add-product"})
  }

  exports.getProducts= (req,res,next) =>{
    Product.fetchAll((products)=>{
        res.render('admin/products',{prods:products, pageTitle:'all admin products',path: "/admin/products"});
         })
  }

  
    exports.postAddProduct = (req,res,next)=> {
      const title = req.body.title;
      const price = req.body.price;
      const imageUrl = req.body.imageUrl;
      const description = req.body.description;
      const product = new Product(title,price,imageUrl,description)
      product.save();
    res.redirect("/");
   }
