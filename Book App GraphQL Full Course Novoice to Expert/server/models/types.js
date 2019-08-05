const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typesSchema = new Schema({
  english: String,
  chinese: String,
  japanese: String
});

module.exports = mongoose.model("types", typesSchema);
