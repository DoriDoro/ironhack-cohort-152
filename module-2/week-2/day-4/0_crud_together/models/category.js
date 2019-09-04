const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: [val => val.length < 20, "Sorry, category name are 20 chars max"]
  }
});

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;
