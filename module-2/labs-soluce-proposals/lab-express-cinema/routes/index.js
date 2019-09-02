const express = require("express");
const router = express.Router();
const MoviesModel = require("./../models/Movie");

/* GET home page */
router.get("/", (req, res) => {
  res.render("index", { title: "IronHack Cinema" });
});

router.get("/movies", (req, res) => {
  MoviesModel.find()
  .then(dbRes => {
    res.render("movies", { title: "IronHack Cinema", movies: dbRes })
  })
  .catch(dbErr => {
    console.log("db error", dbErr);
  })
});

router.get("/movies/:id", (req, res) => {
  MoviesModel.findOne({_id: req.params.id})
  .then(dbRes => {
    console.log(dbRes)
    res.render("movie", { movie: dbRes });
  })
  .catch(dbErr => {
    console.log("db error", dbErr);
  })

});

module.exports = router;
