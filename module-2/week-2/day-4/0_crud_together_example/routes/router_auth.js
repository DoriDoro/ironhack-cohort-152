const express = require("express"); // get the frameworf to define Router
const router = new express.Router(); // setup a new router
const userAPI = require("./api_user"); // import user api for data manipulation
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt"); // bcrypt is a famous lib for data encryption
const bcryptSalt = 10; // the salt level defines the level of encryption
const fileUpload = require("./../config/cloudinary")

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  userAPI
    .getOne(id)
    .then(user => {
      cb(null, user);
    })
    .catch(err => {
      cb(err);
    });
});

// this function setup a local strategy and provides logic for login action
passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // change default username credential to email
    function(email, passwd, next) {
      userAPI
        .getBy({ email })
        .then(user => {
          // db query success
          if (!user)
            // if user === null
            return next(null, false, { message: "Incorrect email" });
          if (!bcrypt.compareSync(passwd, user.password))
            // if provided password is not valid
            return next(null, false, {
              message: "Incorrect password"
            });
          else return next(null, user); // it's all good my friend !
        })
        .catch(dbErr => next(dbErr)); // if the db query fail...
    }
  )
);

function setFlashMessage(errorMessages) {
  var msg;
  if (errorMessages.length) { // flash is an array
    msg = {
      txt: errorMessages[0],
      status: "warning"
    };
  }
  return msg;
}

router.get("/register", (req, res) => {
  res.render("auth/register", {
    msg: setFlashMessage(req.flash("error")),
    scripts: ["form_register.js"]
  });
});

router.post("/register", fileUpload.single("avatar"), (req, res) => {
  const { email, name, lastname, age, password } = req.body;

  userAPI.getBy({ email: req.body.email }).then(checkMail => {
    if (checkMail) {
      const msg = {
        txt: "This email is already registered in database",
        status: "warning"
      };
      return res.render("auth/register", { msg });
    }

    // email is not already taken, continue
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPass = bcrypt.hashSync(password, salt);
    // more info : https://en.wikipedia.org/wiki/Salt_(cryptography)

    const newUser = { name, lastname, email, password: hashedPass, age  };
    
    if (req.file) {
      newUser.avatar = req.file.secure_url;
    }

    userAPI
      .create(newUser)
      .then(dbRes => {
        const msg = {
          txt: "Congrats ! You registered successfully",
          status: "success"
        };
        res.render("auth/register", { msg });
      })
      .catch(dbErr => {
        const msg = {
          txt: "Oh no ! A database error occured while registering",
          status: "error"
        };
        res.render("auth/register", { msg });
      });
  });
});

router.get("/login", (req, res) => {
  res.render("auth/login", { msg: setFlashMessage(req.flash("error")) });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true
  })
);


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
