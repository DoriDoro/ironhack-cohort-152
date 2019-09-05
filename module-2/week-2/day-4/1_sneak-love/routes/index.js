const express = require("express");
const router = express.Router();
const UserModel = require('./../models/User');

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", (req, res) => {
  // userModel
  // .fin
  res.render("products");
});

router.get("/products", (req, res) => {
  res.render("products");
});

router.get("/one-product/:id", (req, res) => {
  res.render("one_product");
});

router.get("/products/edit-product", (req, res) => {
  res.render("product_edit");
});

router.get("/prod-add", (req, res) => {
  res.render("products_add");
});

router.get("/prod-manage", (req, res) => {
  res.render("products_manage");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});


module.exports = router;
