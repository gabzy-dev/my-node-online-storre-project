
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const adminData = require('./Routes/data');
const shopRoute = require('./Routes/shop');
const path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'Public')))

app.use('/admin',adminData.routes);
app.use(shopRoute);

app.set('view engine','pug');
app.set('Views', 'Views');

app.use((req,res,next)=> {
  res.status(404).sendFile((path.join(__dirname,"/","Views","Error.html" )));
});

app.listen(3000); 