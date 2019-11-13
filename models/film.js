const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  id: String,
  title: String,
  description: String,
  director: String,
  producer: String,
  release_date: String,
  people: [String],
  locations: [String]
});

module.exports = mongoose.model("Film", FilmSchema);
