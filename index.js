const express = require("express");
const app = express();
const parser = require("body-parser");
const Film = require("./models/Film");
const People = require("./models/People");
app.use(parser.json());

app.get("/", (req, res) => {
  res.redirect("/films");
});

app.get("/films", (req, res) => {
  Film.find({}).then(films => {
    res.json(films);
  });
});

app.get("/films/:id", (req, res) => {
  let filmId = req.params.id;
  Film.findOne({ id: filmId }).then(films => {
    res.json(films);
  });
});

app.get("/people", (req, res) => {
  People.find({}).then(people => {
    res.json(people);
  });
});
app.get("/people/:id", (req, res) => {
  let peopleId = req.params.id;
  People.findOne({ id: peopleId }).then(people => {
    res.json(people);
  });
});
app.post("/people/post", (req, res) => {
  People.create(req.body).then(people => {
    res.json(people);
  });
});

app.delete("/films/:id", (req, res) => {
  Film.findOneAndRemove({ id: req.params.id }).then(film => {
    res.json(film);
  });
});
app.delete("/people/:id", (req, res) => {
  People.findOneAndRemove({ id: req.params.id }).then(people => {
    res.json(people);
  });
});

app.listen(4000, () => {
  console.log(`hello you're server is running on port 4000`);
});
