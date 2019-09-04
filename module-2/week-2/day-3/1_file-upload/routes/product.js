const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const ProductModel = require("./../models/product");
const uploaderMiddleware = require("../config/cloudinary.js");

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

router.post("/product", uploaderMiddleware.single("image_product"), (req, res) => {
    // return console.log(req.file);
    const { name, ref, price } = req.body;
    
    const newProduct = {
        name,
        ref,
        price
    };

    if (req.file) newProduct.image = req.file.secure_url;

    ProductModel.create(newProduct)
      .then(dbRes => {
        res.redirect("/all-products");
      })
      .catch(error => {
        console.log("db problem !!!");
        console.log(error);
      });
  }
);

module.exports = router;
