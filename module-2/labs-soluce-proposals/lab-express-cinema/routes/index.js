const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie");

/* GET home page */
router.get("/", (req, res) => res.render("index", { title: "IronHack Cinema" }));

router.get("/movies", (req, res) => {
  MovieModel.find()
  .then(dbRes => res.render("movies", { title: "IronHack Cinema", movies: dbRes }))
  .catch(dbErr => console.log("db error", dbErr))
});

router.get("/movies/:id", (req, res) => {
  MovieModel.findOne({_id: req.params.id})
  .then(dbRes => res.render("movie", { movie: dbRes }))
  .catch(dbErr => console.log("db error", dbErr))
});

module.exports = router;
