mongoose = require("./connection.js");
const Film = require("../models/Film");
const People = require("../models/People");
const filmsJson = require("./data/films.json");
const peopleJson = require("./data/people");

const getPeople = (movieId, people) => {
  let movieCharacters = [];
  people.forEach(person => {
    if (person.films[0] === movieId) {
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
    title: item.title,
    gender: item.gender,
    films: item.films[0].slice(38),
    species: item.species,
    url: item.url
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
    locations: item.locations
  };
  return film;
});

Film.deleteMany({}).then(() => {
  Film.create(filmData).then(films => {
    console.log(films);
    console.log("films done");
    process.exit();
  });
});
