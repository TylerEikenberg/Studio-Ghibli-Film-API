const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const People = require("./People");
const Film = require("./Film");

const LocationSchema = new Schema({
  id: String,
  name: String,
  climate: String,
  terrain: String,
  residents: [People.schema],
  films: String,
  url: [String]
});

module.exports = mongoose.model("Location", LocationSchema);
