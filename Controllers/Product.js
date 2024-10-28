exports.getAddProduct = (req,res,next)=> {//allows request to move into the next middleware.
    //next should be called if we dont send a response.
    res.render('add-product', {pageTitle: "Add-product page",path:"/admin/add-product"})
  }