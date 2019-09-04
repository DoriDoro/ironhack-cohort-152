const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const productAPI = require("./api_product"); // import product logic module
const categoryAPI = require("./api_category"); // import product logic module

/* ------------------------------------------------------
          this router only serves pages !!! 
          some routes interact with our productAPI
          router prefix: /dashboard/product/
------------------------------------------------------- */

router.get("/create", (req, res) => {
  categoryAPI.getAll().then(categories => {
    res.render("dashboard/product", {
      isForm: true,
      categories,
      action: "/dashboard/product/create",
      title: "Create a new product",
      msg: res.locals.flashMessage
    });
  });
});

router.get("/list", (req, res) => {
  productAPI
    .getAll()
    .then(products => {
      res.render("dashboard/product", {
        action: "/dashboard/pack/create",
        products,
        isBoard: true,
        msg: res.locals.flashMessage
      });
    })
    .catch(dbErr => {
      res.render("dashboard/product", {
        isBoard: true,
        msg: res.locals.flashMessage
      });
    });
});

router.get("/edit/:id/", (req, res) => {
  productAPI
    .getOne(req.params.id)
    .then(product => {
      categoryAPI.getAll().then(categories => {
        res.render("dashboard/details_product", {
          product,
          categories,
          action: `/dashboard/product/edit/${product.id}`,
          title: `Edit product (${product._id})`,
          scripts: ["form_product_edit.js"],
          msg: res.locals.flashMessage
        });
      });
    })
    .catch(err => {
      res.render("dashboard/details_product", {
        msg: {
          txt: "db problem",
          status: "error"
        }
      });
    });
});

router.get("/delete/:id", (req, res) => {
  productAPI
    .deleteOne(req.params.id)
    .then(dbRes => {
      req.session.flashMessage = {
        txt: "Yay ! product deleted successfully",
        status: "success"
      };
      res.redirect("/dashboard/product/list");
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        txt: "Nay ! A problem occured while deleting the product",
        status: "error",
        detail: dbErr._message
      };
      res.redirect("/dashboard/product/list");
    });
});

router.post("/create", (req, res) => {
  productAPI
    .create(req.body)
    .then(dbSuccess => {
      req.session.flashMessage = {
        status: "success",
        txt: "Yay !! product successfully created"
      };
      res.redirect("/dashboard/product/create");
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        status: "error",
        txt: "Nay !! database error while creating product",
        details: dbErr.message
      };
      res.redirect("/dashboard/product/create");
    });
});

router.post("/edit/:id", (req, res) => {
  productAPI
    .updateOne(req.params.id, req.body)
    .then(() => {
      req.session.flashMessage = { // this message will be accessible for one redirection 
        txt: "Yay ! product edited successfully",
        status: "success"
      };
      res.redirect(`/dashboard/product/edit/${req.params.id}`);
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        txt: "Oh no ! A database error occured while editing the product",
        status: "error",
        detail: dbErr._message
      };
      res.redirect(`/dashboard/product/edit/${req.params.id}`);
    });
});

module.exports = router;
