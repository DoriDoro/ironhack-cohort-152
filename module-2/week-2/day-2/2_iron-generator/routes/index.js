const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  const err = true;
  if (err) {
    next("user in already in the database");
  } else {
    res.render("index");
  }
});

module.exports = router;
