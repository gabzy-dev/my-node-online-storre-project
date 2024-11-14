const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename),'data','products.json');

const getProductFromFile = cb =>{
      fs.readFile(p,(err,fileContent)=>{
        if(err){
          return  cb([])
        }else{
            cb(JSON.parse(fileContent))
        }
      }) 

}

module.exports = class Product {
    constructor(title,imageUrl,price,description){
        this.title = title;
        this.image = imageUrl;
        this.price = price;
        this.description = description;
    }
    
    save(){
        getProductFromFile((products=>{
          products.push(this) ;
            fs.writeFile(p, JSON.stringify(products,null,2), (err)=>{
             if(err){
                console.error('error writing to products.json',err)
             }else{
                console.log('product saved successfully',this)
             }
            });
        }))
        // const p = path.join(path.dirname(require.main.filename),'data','products.json');
        // fs.readFile(p, (err, fileContent) => { 
        //     let products = [];
        //     if(!err){  
        //         try{
        //             products = JSON.parse(fileContent);
        //         } catch(parseError){
        //             console.error('Error parsing JSON, starting with an empty array:', parseError);
        //         }
          
        //     }  })
            // products.push(this) ;
            // fs.writeFile(p, JSON.stringify(products,null,2), (err)=>{
            //  if(err){
            //     console.error('error writing to products.json',err)
            //  }else{
            //     console.log('product saved successfully',this)
            //  }
            // });
      
        // products.push(this)
    }

    static fetchAll(cb){
     getProductFromFile(cb)

    }
};