const Product = require('../Models/product')
// const products = [];

   
   exports.getProducts = (req,res,next)=> {
    // const products = adminData.products;
    Product.fetchAll((products)=>{
   res.render('shop/product-list',{prods:products, pageTitle:'all products',path: "/products"});
    })
    }

    exports.getCart = (req,res,next)=> {
      res.render('shop/cart',{path:'/cart',pageTitle:'my cart'})
    }
    

    exports.getIndex = (req,res,next)=>{
      Product.fetchAll((products)=>{
        res.render('shop/index',{prods:products, pageTitle:'all products',path: "/"});
         })
    }

    exports.getCheckout =(req,res,next) => {
      res.render('shop/checkout',{
        path: "/checkout",
        pageTitle
      })
    }

    exports.showError =(req,res,next)=> {
      res.status(404).render('404',{pageTitle:"Error Page",path:req.path});
      // console.log(path)
    };
  

