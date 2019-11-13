const express = require("express");
const app = express();
const Film = require("./models/Film");

app.get("/", function(req, res) {
  res.redirect("/films");
});

app.get("/films", function(req, res) {
  Film.find({}).then(films => {
    res.json(films);
  });
});

app.get("/films/:id", function(req, res) {
  let filmId = req.params.id;
  Film.findOne({ _id: filmId }).then(films => {
    res.json(films);
  });
});

app.listen(4000, () => {
  console.log(`hello you're server is running on port 4000`);
});
