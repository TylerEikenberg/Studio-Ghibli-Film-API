const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
  name: String,
  gender: String,
  films: [String],
  url: String,
  peopleUrl: String
});

module.exports = mongoose.model("People", PeopleSchema);
