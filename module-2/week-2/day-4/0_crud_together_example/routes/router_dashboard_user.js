const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const userAPI = require("./api_user"); // import user logic module


/* ------------------------------------------------------
          this router only serves pages !!! 
          some routes interact with our userAPI
          router prefix: /dashboard/user/
------------------------------------------------------- */ 

router.get("/create", (req, res) => {
  res.render("dashboard/user", {
    isForm: true,
    msg: res.locals.flashMessage
  });
});

router.get("/:id/details", (req, res) => {
  userAPI
    .getOne(req.params.id)
    .then(user => {
      res.render("dashboard/details_user", { user });
    })
    .catch(err => {
      res.render("dashboard/details_user", { msg: "db problem" });
    });
});

router.get("/list", (req, res) => {
  userAPI
    .getAll()
    .then(users => {
      res.render("dashboard/user", {
        users,
        isBoard: true,
        msg: res.locals.flashMessage
      });
    })
    .catch(dbErr => {
      res.render("dashboard/user.", {
        msg: { status: "error", txt: "db error" },
        isBoard: true,
        msg: res.locals.flashMessage
      });
    });
});

router.post("/", (req, res) => {
  userAPI
    .create(req.body)
    .then(dbSuccess => {
      req.session.flashMessage = {
        status: "success",
        txt: "Yay !! user successfully created"
      };
      res.redirect("/dashboard/user/create");
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        status: "error",
        txt: "Nay !! database issue while creating user",
        details: dbErr._message
      };
      res.redirect("/dashboard/user/create");
    });
});

router.get("/delete/:id", (req, res) => {
  userAPI
    .deleteOne(req.params.id)
    .then(dbRes => {
      req.session.flashMessage = {
        txt: "Yay ! User deleted successfully",
        status: "success"
      };
      res.redirect("/dashboard/user/list");
    })
    .catch(dbErr => {
      req.session.flashMessage = {
        txt: "database error",
        status: "Oh no ! A database error occured while deleting the user",
        detail: dbErr._message
      };
      res.redirect("/dashboard/user/list");
    });
});

module.exports = router;
