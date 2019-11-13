mongoose = require("./connection.js");
const Film = require("../models/Film");
const People = require("../models/People");
const Location = require("../models/Location");
const locationsJson = require("./data/locations.json");
const filmsJson = require("./data/films.json");
const peopleJson = require("./data/people.json");

const convertUrlFilms = oldUrl => {
  let myUrl = oldUrl.replace(
    "https://ghibliapi.herokuapp.com/films",
    "http://localhost:4000/films"
  );
  return myUrl;
};
const convertUrlPeople = oldUrl => {
  let myUrl = oldUrl.replace(
    "https://ghibliapi.herokuapp.com/people",
    "http://localhost:4000/people"
  );
  return myUrl;
};
const getPeople = (movieId, people) => {
  let movieCharacters = [];
  people.forEach(person => {
    if (person.films === movieId) {
      movieCharacters.push(person);
    }
  });
  return movieCharacters;
};

/*
var n = str.slice(38); to get id of film for character
 */
const peopleData = peopleJson.map(item => {
  const people = {
    id: item.id,
    name: item.name,
    gender: item.gender,
    films: item.films[0].slice(38),
    // species: item.species,
    url: convertUrlPeople(item.url),
    peopleUrl: "http://localhost:4000/people/"
  };
  return people;
});

const filmData = filmsJson.map(item => {
  const film = {
    id: item.id,
    title: item.title,
    description: item.description,
    director: item.director,
    producer: item.producer,
    release_date: item.release_date,
    people: getPeople(item.id, peopleData),
    // locations: item.locations,
    url: convertUrlFilms(item.url)
  };
  return film;
});

const locationData = locationsJson.map(item => {
  const location = {
    id: item.id,
    name: item.name,
    climate: item.climate,
    terrain: item.terrain,
    url: item.url
  };
  return location;
});

const runSeeder = async () => {
  const deletedPeople = await People.deleteMany({});
  console.log(deletedPeople);

  const deletedFilms = await Film.deleteMany({});
  console.log(deletedFilms);

  const deletedLocations = await Location.deleteMany({});
  console.log(deletedLocations);

  const people = await People.create(peopleData);
  console.log(people.length);
  console.log("people done");

  const films = await Film.create(filmData);
  console.log(films.length);
  console.log("films done");

  const locations = await Location.create(locationData);
  console.log(locations.length);
  console.log("locations done");
  process.exit();
};

runSeeder();

// Film.deleteMany({}).then(deletedFilms => {
//   console.log(deletedFilms);

//   Film.create(filmData).then(films => {
//     console.log(films);
//     console.log("films done");
//     process.exit();
//   });
// });
