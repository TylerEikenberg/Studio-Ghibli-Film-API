const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
  id: String,
  name: String,
  gender: String,
  films: [String],
  // species: String,
  url: String,
  peopleUrl: String
});

module.exports = mongoose.model("People", PeopleSchema);
