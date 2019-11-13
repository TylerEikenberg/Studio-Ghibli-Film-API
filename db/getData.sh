#!/bin/bash

rm -rf ./db/data/* && 
touch ./db/data/people.json && 
touch ./db/data/films.json && 
touch ./db/data/locations.json &&
curl https://ghibliapi.herokuapp.com/films/ > ./db/data/films.json && 
curl https://ghibliapi.herokuapp.com/people/ > ./db/data/people.json &&
curl https://ghibliapi.herokuapp.com/locations/ > ./db/data/locations.json