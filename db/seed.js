const axios = require("axios");
const Film = require("../models/Film");

const url = "https://ghibliapi.herokuapp.com/films";

const dirtyfilmData = [];

axios.get(url).then(
  response => {
    dirtyfilmData = response;
  },
  error => {
    console.log(error);
  }
);

const filmData = dirtyfilmData.map(item => {
  const film = {};
  film._id = item._id;
  film.title = item.title;
  film.description = item.description;
  film.director = item.director;
  film.producer = item.producer;
  film.release_date = item.release_date;
  film.people = item.people;
  film.locations = item.locations;
  return film;
});

Film.deleteMany({}).then(() => {
  Film.create(filmData).then(films => {
    console.log(films);
    console.log("films done");
    process.exit();
  });
});
