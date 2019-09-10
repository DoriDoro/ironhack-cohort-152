const express = require("express");
const router = new express.Router();
module.exports = router;
const UserModel = require('./../models/User');
const bcrypt = require("bcrypt");
// const session = require('express-session');


router.post("/signup", (req, res, next) => {
    // console.log('signup');
    // console.log(req.body);

    const user = req.body; // so req.body contains the submited informations (out of the post)
        UserModel
        .findOne({ email: user.email })
        .then(dbRes => {
          if (dbRes) {
              console.log(dbRes);
            res.render("signup", { errorMsg: "User already exists !" });
            return;
          }
          const salt = bcrypt.genSaltSync(10); // cryptography librairie
          const hashed = bcrypt.hashSync(user.password, salt);
          // console.log("original", user.password);
          // console.log("hashed", hashed);
          // return ;
          user.password = hashed;
          UserModel
            .create(user)
            .then(() => res.redirect("/"))
            .catch((err) => next(err));
        })
        .catch(dbErr => {
          next(dbErr);
        });
  });


  router.post("/signin", (req, res, next) => {
    const user = req.body; 
    // console.log(req.body);

    UserModel
    .findOne({ email: user.email })
    .then(dbRes => {
        if (!user) {
          res.render("signin", {
            errorMessage: "The username doesn't exist."
          });
          return;
        }
        if (bcrypt.compareSync(user.password, dbRes.password)) {
          // Save the login in the session!
          req.session.currentUser = user;
          res.redirect("/") // || res.redirect("/private");
        } else {
          res.render("signin", {
            errorMessage: "Incorrect password"
          });
        }
    })
    .catch(error => {
      next(error);
    })
  });

  module.exports = router;





