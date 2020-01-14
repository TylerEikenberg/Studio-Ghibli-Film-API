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
    "https://ghibli-api-tse.herokuapp.com/films"
  );
  return myUrl;
};
const convertUrlPeople = oldUrl => {
  let myUrl = oldUrl.replace(
    "https://ghibliapi.herokuapp.com/people",
    "https://ghibli-api-tse.herokuapp.com/people"
  );
  return myUrl;
};
const convertUrlLocation = oldUrl => {
  let myUrl = oldUrl.replace(
    "https://ghibliapi.herokuapp.com/locations",
    "https://ghibli-api-tse.herokuapp.com/locations"
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
const getLocations = (movieId, location) => {
  let movieLocations = [];
  location.forEach(location => {
    if (location.films === movieId) {
      movieLocations.push(location);
    }
  });
  return movieLocations;
};

/*
var n = str.slice(38); to get id of film for character
 */
const peopleData = peopleJson.map(item => {
  const people = {
    name: item.name,
    gender: item.gender,
    films: item.films[0].slice(38),
    url: convertUrlPeople(item.url),
    peopleUrl: "https://ghibli-api-tse.herokuapp.com/people/"
  };
  return people;
});

const locationData = locationsJson.map(item => {
  const location = {
    id: item.id,
    name: item.name,
    climate: item.climate,
    terrain: item.terrain,
    films: item.films[0].slice(38),
    url: convertUrlLocation(item.url[0])
  };
  return location;
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
    locations: getLocations(item.id, locationData),
    url: convertUrlFilms(item.url)
  };
  return film;
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
