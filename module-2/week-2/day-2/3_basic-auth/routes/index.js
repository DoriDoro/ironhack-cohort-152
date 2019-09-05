const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.redirect("/main");
});

router.get("/main", (req, res, next) => {
  res.render("main");
});

router.get("/private", (req, res) => {
  if (req.session.currentUser) {
    res.render("private", { username: req.session.currentUser.username });
  } else {
    res.redirect("/login");
  }
});

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/logout", (req, res) => {
  req.session.destroy(err => {
    res.locals.loggedin = "false";
    res.redirect("/login");
  });
});

module.exports = router;
