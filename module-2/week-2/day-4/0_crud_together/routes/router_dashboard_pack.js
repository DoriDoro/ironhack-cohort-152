const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const packAPI = require("./api_pack"); // importing the pack's  API
const productAPI = require("./api_product"); // importing the product's API

/* ------------------------------------------------------
          this router only serves pages !!! 
          some routes interact with our packAPI or productAPI
          router prefix: /dashboard/packs/
------------------------------------------------------- */

router.get("/list", (req, res) => {
  console.log(res.locals.flashMessage);
  packAPI
    .getAll()
    .then(packs => {
      res.render("dashboard/pack", {
        isBoard: true,
        packs,
        msg: res.locals.flashMessage
      });
    })
    .catch(dbErr => {
      res.render("dashboard/pack", {
        isBoard: true,
        msg: {
          status: "error",
          txt: "Sorry, error while fetching packs from database",
          details: dbErr.message
        }
      });
    });
});

router.get("/create", (req, res) => {
  console.log(req.params)
  const products_ids = req.query.products_id;
  if (!products_ids || (products_ids && products_ids.length < 2)) {
    req.session.flashMessage = {
      txt: "Please select at least 2 products to create a pack",
      status: "warning"
    };
    res.redirect("/dashboard/product/list");
  } else {
    productAPI.getSome(products_ids).then(selectedProducts => {
      res.render("dashboard/pack", {
        action: "/dashboard/pack/create",
        isForm: true,
        scripts: ["board_product_packs.js"],
        products: selectedProducts
      });
    });
  }
});

router.get("/edit/:id", (req, res) => {
  packAPI.getOne(req.params.id).then(pack => {
    console.log("ici", pack);
    res.render("dashboard/pack", {
      action: `/dashboard/pack/edit/${pack.id}`,
      isForm: true,
      products: pack.products,
      scripts: ["board_product_packs.js"],
      pack
    });
  });
});

router.get("/delete/:id", (req, res) => {
  packAPI.deleteOne(req.params.id)
  .then(dbRes => {
      req.session.flashMessage = {
        status: "success",
        txt: "Yay !! pack successfully deleted from database"
      };
      res.redirect("/dashboard/pack/list");
  })
  .catch(dbErr => {
      req.session.flashMessage = {
        status: "error",
        txt: "Nay !! Database error while removing pack"
      };
      res.redirect("/dashboard/pack/list");
  })
});

router.post("/create", (req, res) => {
  packAPI
    .create(req.body)
    .then(() => {
      req.session.flashMessage = {
        status: "success",
        txt: "Yay !! product-pack saved in database"
      };
      res.redirect("/dashboard/pack/list/");
    })
    .catch(dbErr => {
      // console.log(dbErr);
      req.session.flashMessage = {
        status: "error",
        txt: "Nay !! Error occured while saving pack in database",
        details: dbErr
      };
      res.redirect("/dashboard/pack/list/");
    });
});

router.post("/edit/:id", (req, res) => {
  packAPI
    .updateOne(req.params.id, req.body)
    .then(() => {
      req.session.flashMessage = {
        txt: "Yay ! product-pack edited successfully",
        status: "success"
      };
      res.redirect(`/dashboard/pack/edit/${req.params.id}/`);
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        txt: "Oh no ! A database error occured while editing the product",
        status: "error",
        detail: dbErr._message
      };
      res.redirect(`/dashboard/pack/edit/${req.params.id}/`);
    });
});

module.exports = router;
