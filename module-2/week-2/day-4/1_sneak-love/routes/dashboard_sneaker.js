const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const SneakerModel = require("./../models/Sneaker");
const TagModel = require("./../models/Tag");
const uploadCloud = require('../config/cloudinary');

const  multer  = require('multer')
const upload = multer()

router.post("/prod-add", uploadCloud.single("image"), (req, res, next) => {

    const {name, ref, sizes, description, price, category } = req.body; 
    // console.log("here",req.file);
    const newSneaker = {
        name,
        ref,
        sizes,
        description,
        price,
        category
    }

    if(req.file) newSneaker.image = req.file.secure_url;
    
    SneakerModel
    .create(newSneaker)
    .then(userEntry => {
        res.render("products");
        console.log("new Sneakers created");
    })
    .catch(userErr => {
        console.log(userErr);
    });
});

router.post("/sneakers/collection", upload.none(), (req, res, next) => {
    TagModel
    .create(req.body)
    .then(dbRes => {
        // console.log('---', dbRes, '----', req.body); // display the _id and the lable
        
        res.render("products", {tags: dbRes});
    })
    .catch(dbErr => console.log(dbErr));
})


router.post('/prod-edit/:id', upload.none(), (req, res, next) => {
    // console.log('start ---');
    // console.log(req.body); // {}
    // console.log(req.params.id); // ok
    
    SneakerModel.findByIdAndUpdate(req.params.id, req.body)
    .then((dbRes)=>{
        // console.log(req.body); // {}
        // console.log('dbRes ----', dbRes);
        
      res.redirect('/products_manage', {sneaker: dbRes});
    })
    .catch((error)=>{
        console.log("cannot update properly")
        res.redirect('/prod-manage')
    })
  });





module.exports = router;
