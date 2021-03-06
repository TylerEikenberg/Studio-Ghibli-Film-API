const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const People = require("./People");
const Location = require("./Location");

const FilmSchema = new Schema({
  id: String,
  title: String,
  description: String,
  director: String,
  producer: String,
  release_date: String,
  people: [People.schema],
  locations: [Location.schema],
  url: String
});

module.exports = mongoose.model("Film", FilmSchema);
