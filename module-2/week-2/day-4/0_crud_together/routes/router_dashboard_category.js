const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)

/* ------------------------------------------------------
          this router only serves pages !!! 
          router prefix: /dashboard/catgeory/
------------------------------------------------------- */

router.get("/manage", (req, res) => {
  res.render("dashboard/category", {
    scripts: ["board_category.js"]
  });
});

module.exports = router; // make the router available elsewhere if required()
