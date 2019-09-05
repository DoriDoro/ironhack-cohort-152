//  Tags {label}

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
  lable: String
});

const TagsModel = mongoose.model("Tags", tagsSchema);

module.exports = TagsModel;

