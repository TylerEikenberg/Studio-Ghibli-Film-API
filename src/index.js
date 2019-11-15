const express = require("express");
const app = express();
const parser = require("body-parser");
const Film = require("../models/Film");
const People = require("../models/People");
const Location = require("../models/Location");
app.use(parser.json());

app.use(express.static("doc"));

/**
 * @api {get} /films 1. Returns list of films
 * @apiName GetFilms
 * @apiGroup Films
 *
 * @apiSuccess {String} id Unique ID of film.
 * @apiSuccess {String} title  Title of film.
 * @apiSuccess {String} description  Description of film.
 * @apiSuccess {String} director  Director of film.
 * @apiSuccess {String} producer  Producer of film.
 * @apiSuccess {String} release_date  Release date of film.
 * @apiSuccess {People[]} people  Array of characters in the film.
 * @apiSuccess {Locations[]} locations  Array of locations within the film.
 */
app.get("/films", (req, res) => {
  Film.find({}).then(films => {
    res.json(films);
  });
});

/**
 * @api {get} /films/:id 2. Return single movie by a unique id.
 * @apiName GetFilmsId
 * @apiGroup Films
 *
 * @apiParam {String} id Films's unique ID.
 *
 * @apiSuccess {String} id Unique ID of film.
 * @apiSuccess {String} title  Title of film.
 * @apiSuccess {String} description  Description of film.
 * @apiSuccess {String} director  Director of film.
 * @apiSuccess {String} producer  Producer of film.
 * @apiSuccess {String} release_date  Release date of film.
 * @apiSuccess {People[]} people  Array of characters in the film.
 * @apiSuccess {Locations[]} locations  Array of locations within the film.
 * 
 * @apiSuccessExample Successful Response
 *     HTTP/1.1 200 OK
 * {
 *"id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
  "title": "Porco Rosso",
  "description": "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
  "director": "Hayao Miyazaki",
  "producer": "Toshio Suzuki",
  "release_date": "1992",
  "people": [
    {
      "films": [
        "ebbb6b7c-945c-41ee-a792-de0e43191bd8"
      ],
      "_id": "5dcdf9ecf568d3021125dc5d",
      "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
      "name": "Porco Rosso",
      "gender": "Male",
      "url": "https://ghibli-api-tse.herokuapp.com//people/6523068d-f5a9-4150-bf5b-76abe6fb42c3",
      "peopleUrl": "https://ghibli-api-tse.herokuapp.com//people/"
    }
  ],
  "locations": [
    {
      "url": [
        "https://ghibli-api-tse.herokuapp.com//locations/34df8f25-8f80-4823-8f01-bf9852039987"
      ],
      "_id": "5dcdf9ecf568d3021125dc5e",
      "id": "34df8f25-8f80-4823-8f01-bf9852039987",
      "name": "Piccolo S.P.A.",
      "climate": "Continental",
      "terrain": "River",
      "films": "ebbb6b7c-945c-41ee-a792-de0e43191bd8"
    }
  ],
  "url": "https://ghibli-api-tse.herokuapp.com//films/ebbb6b7c-945c-41ee-a792-de0e43191bd8",
}
 */
app.get("/films/:id", (req, res) => {
  Film.findOne({ id: req.params.id }).then(films => {
    res.json(films);
  });
});

/**
 * @api {get} /films/director/:director 3. Return movies by a single director
 * @apiName GetFilmsDirector
 * @apiGroup Films
 *
 * @apiSuccess {String} id Unique ID of film.
 * @apiSuccess {String} title  Title of film.
 * @apiSuccess {String} description  Description of film.
 * @apiSuccess {String} director  Director of film.
 * @apiSuccess {String} producer  Producer of film.
 * @apiSuccess {String} release_date  Release date of film.
 * @apiSuccess {People[]} people  Array of characters in the film.
 * @apiSuccess {Locations[]} locations  Array of locations within the film.
 */
app.get("/films/director/:director", (req, res) => {
  Film.find({ director: req.params.director }).then(films => {
    res.json(films);
  });
});
/**
 * @api {get} /films/title/:title 4. Return movies by a single title
 * @apiName GetFilmsTitle
 * @apiGroup Films
 *
 * @apiSuccess {String} id Unique ID of film.
 * @apiSuccess {String} title  Title of film.
 * @apiSuccess {String} description  Description of film.
 * @apiSuccess {String} director  Director of film.
 * @apiSuccess {String} producer  Producer of film.
 * @apiSuccess {String} release_date  Release date of film.
 * @apiSuccess {People[]} people  Array of characters in the film.
 * @apiSuccess {Locations[]} locations  Array of locations within the film.
 */
app.get("/films/title/:title", (req, res) => {
  Film.find({ title: req.params.title }).then(films => {
    res.json(films);
  });
});

/**
 * @api {get} /people 1. Return list of characters
 * @apiName GetCharacters
 * @apiGroup People
 *
 * @apiSuccess {String} id Unique ID of character.
 * @apiSuccess {String} name  Name of character.
 * @apiSuccess {String} gender  Gender of character.
 * @apiSuccess {Films[]} films  List of films character appears in.
 * @apiSuccess {String} url  Url of unique character.
 * @apiSuccess {String} peopleUrl Url back to /people.
 */
app.get("/people", (req, res) => {
  People.find({}).then(people => {
    res.json(people);
  });
});
/**
 * @api {get} /people/:id 2. Return single character by unique id.
 * @apiName GetCharacterById
 * @apiGroup People
 *
 * @apiSuccess {String} id Unique ID of character.
 * @apiSuccess {String} name  Name of character.
 * @apiSuccess {String} gender  Gender of character.
 * @apiSuccess {Films[]} films  List of films character appears in.
 * @apiSuccess {String} url  Url of unique character.
 * @apiSuccess {String} peopleUrl Url back to /people.
 */
app.get("/people/:id", (req, res) => {
  People.findOne({ id: req.params.id }).then(people => {
    res.json(people);
  });
});
/**
 * @api {get} /people/name/:name 3. Return single character by name.
 * @apiName GetCharacterByName
 * @apiGroup People
 *
 * @apiSuccess {String} id Unique ID of character.
 * @apiSuccess {String} name  Name of character.
 * @apiSuccess {String} gender  Gender of character.
 * @apiSuccess {Films[]} films  List of films character appears in.
 * @apiSuccess {String} url  Url of unique character.
 * @apiSuccess {String} peopleUrl Url back to /people.
 */
app.get("/people/name/:name", (req, res) => {
  People.findOne({ name: req.params.name }).then(people => {
    res.json(people);
  });
});
/**
 * @api {post} /people/create 4. Create a character.
 * @apiName CreateCharacter
 * @apiGroup People
 *
 * @apiSuccess {String} id Unique ID of character.
 * @apiSuccess {String} name  Name of character.
 * @apiSuccess {String} gender  Gender of character.
 * @apiSuccess {Films[]} films  List of films character appears in.
 * @apiSuccess {String} url  Url of unique character.
 * @apiSuccess {String} peopleUrl Url back to /people.
 */
app.post("/people/create", (req, res) => {
  People.create(req.body).then(people => {
    res.json(people);
  });
});
/**
 * @api {put} /people/update/:id 5. Update character info by unique id.
 * @apiName UpdateCharacter
 * @apiGroup People
 *
 * @apiSuccess {String} id Unique ID of character.
 * @apiSuccess {String} name  Name of character.
 * @apiSuccess {String} gender  Gender of character.
 * @apiSuccess {Films[]} films  List of films character appears in.
 * @apiSuccess {String} url  Url of unique character.
 * @apiSuccess {String} peopleUrl Url back to /people.
 */
app.put("/people/update/:id", (req, res) => {
  People.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }).then(
    people => {
      res.json(people);
    }
  );
});

/**
 * @api {get} /locations 1. Returns list of locations
 * @apiName GetLocations
 * @apiGroup Locations
 *
 * @apiSuccess {String} id Unique ID of location.
 * @apiSuccess {String} name  Name of location.
 * @apiSuccess {String} climate  Climate of location.
 * @apiSuccess {Films[]} terrain  Terrain of location.
 * @apiSuccess {String} films  Film that location appears in.
 * @apiSuccess {String} url Unique url of location.
 */
app.get("/locations", (req, res) => {
  Location.find({}).then(locations => {
    res.json(locations);
  });
});
/**
 * @api {get} /locations/:id 2. Returns location by unique id.
 * @apiName GetLocationsById
 * @apiGroup Locations
 *
 * @apiSuccess {String} id Unique ID of location.
 * @apiSuccess {String} name  Name of location.
 * @apiSuccess {String} climate  Climate of location.
 * @apiSuccess {Films[]} terrain  Terrain of location.
 * @apiSuccess {String} films  Film that location appears in.
 * @apiSuccess {String} url Unique url of location.
 */
app.get("/locations/:id", (req, res) => {
  Location.findOne({ id: req.params.id }).then(locations => {
    res.json(locations);
  });
});
/**
 * @api {get} /locations/name/:name 3. Returns location by name.
 * @apiName GetLocationsByName
 * @apiGroup Locations
 *
 * @apiSuccess {String} id Unique ID of location.
 * @apiSuccess {String} name  Name of location.
 * @apiSuccess {String} climate  Climate of location.
 * @apiSuccess {Films[]} terrain  Terrain of location.
 * @apiSuccess {String} films  Film that location appears in.
 * @apiSuccess {String} url Unique url of location.
 */
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
