mongoose = require("./connection.js");
const Film = require("../models/Film");
const ghibliJson = require("./data/ghibli.json");

const filmData = ghibliJson.map(item => {
  const film = {
    id: item.id,
    title: item.title,
    description: item.description,
    director: item.director,
    producer: item.producer,
    release_date: item.release_date,
    people: item.people,
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
