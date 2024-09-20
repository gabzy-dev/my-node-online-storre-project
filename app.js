
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-item",(req,res,next)=> {//allows request to move into the next middleware.
  //next should be called if we dont send a response.
  res.send("<form action ='product' method ='POST'><input type='text' name='title'/><button type='submit'>submit</button> </form>");

});

app.post("/product",(req,res,next)=> {
 res.redirect("/");
 console.log(req.body);
})

app.use('/',(req,res,next)=> {

  res.send("<h1>this is the homepage</h1>");
})

app.listen(3001);