const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  id: String,
  name: String,
  climate: String,
  terrain: String,
  films: String,
  url: [String]
});

module.exports = mongoose.model("Location", LocationSchema);
