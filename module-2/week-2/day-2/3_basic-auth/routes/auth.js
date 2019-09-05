const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

//Authorization

router.post("/signup", (req, res, next) => {
  // return console.log(req.body);
  const user = req.body; // so req.body contains the submited informations (out of the post)
  if (!user.username || !user.password) {
    res.render("auth/signup", { errorMsg: "All fields are required." });
    return;
  } else {
    userModel
      .findOne({ username: user.username })
      .then(dbRes => {
        if (dbRes) {
          res.render("auth/signup", { errorMsg: "User already exists !" });
          return;
        }
        const salt = bcrypt.genSaltSync(10); // cryptography librairie
        const hashed = bcrypt.hashSync(user.password, salt);
        // console.log("original", user.password);
        // console.log("hashed", hashed);
        // return ;
        user.password = hashed;
        userModel
          .create(user)
          .then(() => res.redirect("/"))
          .catch(next(err));
      })
      .catch(dbErr => {
        next(dbErr);
      });
  }
});

//Authenticating

router.post("/login", (req, res, next) => {
  const user = req.body;
  if (!user.username || !user.password) {
    res.render("auth/login", { errorMsg: "Please fill in all the fields" });
  }
  userModel
    .findOne({ username: user.username })
    .then(dbRes => {
      if (!dbRes) {
        res.render("auth/login", { errorMsg: "Bad username or password" });
        return;
      }
      if (bcrypt.compareSync(user.password, dbRes.password)) {
        req.session.currentUser = user;
        res.redirect("/private");
        return;
      } else {
        res.render("auth/login", { errorMsg: "Bad username or password" });
        return;
      }
    })
    .catch(dbErr => {
      next(dbErr);
    });
});




module.exports = router;
