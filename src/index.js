const express = require("express");
const app = express();
const parser = require("body-parser");
const Film = require("../models/Film");
const People = require("../models/People");
const Location = require("../models/Location");
app.use(parser.json());

app.use(express.static("doc"));

app.get("/", (req, res) => {
  res.redirect("/films");
});

/**
 * @api {get} /films Returns Studio Ghibli Movies
 * @apiName GetFilms
 * @apiGroup Films
 *
 * @apiParam {String} id User's unique ID.
 *
 * @apiSuccess {String} id Unique ID of film.
 * @apiSuccess {String} title  Title of film.
 * @apiSuccess {String} description  Description of film.
 * @apiSuccess {String} director  Director of film.
 * @apiSuccess {String} producer  Producer of film.
 * @apiSuccess {String} release_date  Release date of film.
 * @apiSuccess {Array} people  Array of characters in the film.
 * @apiSuccess {Array} locations  Array of locations within the film.
 */
app.get("/films", (req, res) => {
  Film.find({}).then(films => {
    res.json(films);
  });
});

/**
 * @api {get} /films/:id Return single movie by a unique id.
 * @apiName Get Films
 * @apiGroup Films
 *
 * @apiParam {String} id User's unique ID.
 *
 * @apiSuccess {String} id Unique ID of film.
 * @apiSuccess {String} title  Title of film.
 * @apiSuccess {String} description  Description of film.
 * @apiSuccess {String} director  Director of film.
 * @apiSuccess {String} producer  Producer of film.
 * @apiSuccess {String} release_date  Release date of film.
 * @apiSuccess {Array} people  Array of characters in the film.
 * @apiSuccess {Array} locations  Array of locations within the film.
 */
app.get("/films/:id", (req, res) => {
  Film.findOne({ id: req.params.id }).then(films => {
    res.json(films);
  });
});
app.get("/films/director/:director", (req, res) => {
  Film.find({ director: req.params.director }).then(films => {
    res.json(films);
  });
});
app.get("/films/title/:title", (req, res) => {
  Film.find({ title: req.params.title }).then(films => {
    res.json(films);
  });
});

app.get("/people", (req, res) => {
  People.find({}).then(people => {
    res.json(people);
  });
});
app.get("/people/:id", (req, res) => {
  People.findOne({ id: req.params.id }).then(people => {
    res.json(people);
  });
});
app.get("/people/name/:name", (req, res) => {
  People.findOne({ name: req.params.name }).then(people => {
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
  Location.findOne({ id: req.params.id }).then(locations => {
    res.json(locations);
  });
});
app.get("/locations/name/:name", (req, res) => {
  Location.findOne({ name: req.params.name }).then(locations => {
    res.json(locations);
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

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
