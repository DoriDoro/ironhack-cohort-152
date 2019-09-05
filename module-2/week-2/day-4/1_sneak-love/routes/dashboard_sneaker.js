const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const SneakerModel = require("./../models/Sneaker");


router.post("/prod-add", (req, res) => {
    console.log(req.body);

    const {name, ref, sizes, description, price, category } = req.body; 

    SneakerModel
    .create( {
        name,
        ref,
        sizes,
        description,
        price,
        category
    })
    .then(userEntry => {
        res.redirect("/products");
        console.log("new Sneakers created", userEntry);
    })
    .catch(userErr => {
        console.log(userErr);
    });
});




module.exports = router;
