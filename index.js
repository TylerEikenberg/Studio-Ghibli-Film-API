const express = require("express");
const app = express();
const parser = require("body-parser");
const Film = require("./models/Film");
const People = require("./models/People");
const Location = require("./models/Location");
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
app.get("/films/director/:director", (req, res) => {
  Film.find({ director: req.params.director }).then(films => {
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
app.post("/people/create", (req, res) => {
  People.create(req.body).then(people => {
    res.json(people);
  });
});
app.put("/people/update/:id", (req, res) => {
  People.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }).then(
    people => {
      res.json(people);
    }
  );
});

app.get("/locations", (req, res) => {
  Location.find({}).then(locations => {
    res.json(locations);
  });
});
app.get("/locations/:id", (req, res) => {
  let locationsId = req.params.id;
  Location.findOne({ id: locationsId }).then(films => {
    res.json(films);
  });
});

app.delete("/films/delete/:id", (req, res) => {
  Film.findOneAndRemove({ id: req.params.id }).then(film => {
    res.json(film);
  });
});
app.delete("/people/delete/:id", (req, res) => {
  People.findOneAndRemove({ id: req.params.id }).then(people => {
    res.json(people);
  });
});

app.listen(4000, () => {
  console.log(`Hey bud; server's runnin' on port 4000.`);
});
