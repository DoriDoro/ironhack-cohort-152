const express = require("express");
const router = new express.Router();
const categoryModel = require("../models/category");

// ------------------------------------------------------
// this router only deals with category data exchange (CRUD)
// ------------------------------------------------------
// API PREFIX => /api/category/
// this string /api/category/ comes from server.js settings.
// all the routes of userRouter are automaticaly prefixed
// ex: router.get("/all") === router.get("/api/category/all");
// -------------------------------------------------------

// const create = data => categoryModel.create(data);

const create = function(data) {
  return categoryModel.create(data);
} 

const getAll = () => categoryModel.find();

const getOne = id => categoryModel.findById(id);

const deleteOne = id => categoryModel.findOneAndDelete(id);

const updateOne = (id, catName) => categoryModel.findOneAndUpdate(
  { _id: id },
  { name: catName }
);

// insert one category in database
router.post("/create", (req, res) => {
  create(req.body)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(dbErr => res.send(dbErr));
});

// fetch all categorys from database
router.get("/all", (req, res) => {
  getAll()
    .then(dbRes => res.status(200).json(dbRes))
    .catch(dbErr => res.send(dbErr));
});

// get one category from database
router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(dbErr => res.send(dbErr));
});

// remove one category from database
router.delete("/:id", (req, res) => {
  deleteOne(req.params.id, req.params.name)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(dbErr => res.send(dbErr));
});

// update one category in database
router.patch("/:id", (req, res) => {
  updateOne(req.params.id, req.body.name)
    .then(dbRes => res.status(200).json(dbRes))
    .catch(dbErr => res.send(dbErr));
});

module.exports = {
  create,
  deleteOne,
  getAll,
  getOne,
  updateOne,
  router
};
