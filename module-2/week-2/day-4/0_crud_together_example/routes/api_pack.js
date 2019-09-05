const express = require("express");
const router = new express.Router();
const packModel = require("../models/pack");

// ------------------------------------------------------
// this router only deals with pack data exchange (CRUD)
// ------------------------------------------------------
// API PREFIX => /api/pack/
// this string /api/pack/ comes from server.js settings.
// all the routes of userRouter are automaticaly prefixed
// ex: router.get("/all") === router.get("/api/pack/all");
// -------------------------------------------------------

const create = data => packModel.create(data);

const getAll = () => packModel.find().populate("products");

const getOne = id => packModel.findById(id).populate("products");

const deleteOne = id => packModel.findOneAndDelete({ _id: id });

const updateOne = (id, data) => packModel.findOneAndUpdate({ _id: id }, { ...data });
// updateOne() above uses spread operator on ...data argument (an object)
// to create as many key:value pairs as contained in data object
// just a shortcurt instead of declaring : 
// {name: data.name, price: data.price, products: data.products} , etc.


// insert one pack in database
router.post("/create", (req, res) => {
    create(req.body)
      .then(dbRes => res.status(200).json(dbRes))
      .catch(dbErr => res.send(dbErr));
});

// fetch all packs from database
router.get("/all", (req, res) => {
    getAll()
      .then(dbRes => res.status(200).json(dbRes))
      .catch(dbErr => res.send(dbErr));
});

// get one pack from database
router.get("/:id", (req, res) => {
  getOne(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(dbErr => res.send(dbErr));
});

module.exports = {
  create,
  deleteOne,
  getAll,
  getOne,
  router,
  updateOne
};
