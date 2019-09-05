const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const ProductModel = require("./../models/product");
const uploader = require("../config/cloudinary");

router.get("/all-products", (req, res) => {
  ProductModel.find()
  .then(dbRes => {
    res.render("products", { products: dbRes });
  })
  .catch(dbErr => console.log(dbErr));
});

router.get("/new-product", (req, res) => {
  res.render("upload");
});

router.post("/product", uploader.single("image_product"), (req, res) => {
    // return console.log(req.file);
    const { name, ref, price } = req.body; // object destructuring
    
    const newProduct = {
        name,
        ref,
        price
    };

    // if a file has been uploaded, multer will fill the request object with a file key lkeading to the uploaded media
    console.log(req.file);
    if (req.file) newProduct.image = req.file.secure_url;

    ProductModel.create(newProduct)
      .then(dbRes => {
        res.redirect("/all-products");
      })
      .catch(error => {
        console.log("db problem !!!");
        console.log(error.message);
      });
  }
);

module.exports = router;
