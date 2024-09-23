
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const adminRoute = require('./Routes/data');
const shopRoute = require('./Routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);

app.use((req,res,next)=> {
  res.status(404).send("<h1> 404 page not founf")
})
;

app.listen(3000); 