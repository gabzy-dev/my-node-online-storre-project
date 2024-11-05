
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./Routes/data');
const shopRoute = require('./Routes/shop');
const path = require("path");
const errorPage = require("./Controllers/Product")

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'Public')))

app.use('/admin',adminRoutes);
app.use(shopRoute);

app.set('view engine','ejs');
app.set('Views','Views');

// app.use((req,res,next)=> {
//   res.status(404).render('404',{pageTitle:"Error Page."});
// });

app.use(errorPage.showError);

app.listen(3000); 