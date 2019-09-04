const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productsPackSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  price: {
    type: Number,
    required: true
  }
});

const productsPackModel = mongoose.model("ProductPack", productsPackSchema);

module.exports = productsPackModel;
