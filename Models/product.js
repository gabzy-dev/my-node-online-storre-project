const products = [];
const path = require('path');
const fs = require('fs');
module.exports = class Product {
    constructor(t){
        this.title = t;

    }
    
    save(){
        const p = path.join(__dirname,'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            console.log(err)
        })
        // products.push(this)
    }

    static fetchAll(){
        return products;
    }


}