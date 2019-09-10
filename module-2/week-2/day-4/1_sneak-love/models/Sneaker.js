// Sneaker {name, ref, sizes, description, price, category: [men, women, kids], id_tags: [ObjectId] }

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  sizes: String,
  description: String,
  price: Number,
  category: String,
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tags"
  },
  image: String
});

const SneakerModel = mongoose.model("Sneaker", sneakerSchema);

module.exports = SneakerModel;


