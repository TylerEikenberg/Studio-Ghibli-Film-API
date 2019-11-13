![Studio Ghibli Banner](./assets/ghiblibanner.png)  
# Studio Ghibli API  
The __Studio Ghibli API__ documents information about the films from Studio Ghibli and information about the characters within the films.  

## Endpoints  
- films  
- people 
- locations  
- films/director/

## Getting Started  
The __films__ endpoint will give you information about the various Studio Ghibli films produced over the years.  Information includes titles, description, director, producer, release date, and list of characters in the film.  
```
{
    "locations": [
      "https://ghibliapi.herokuapp.com/locations/"
    ],
    "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "title": "Grave of the Fireflies",
    "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
    "release_date": "1988",
    "people": [
      
    ],
    "url": "http://localhost:4000/films/12cfb892-aac0-4c5b-94af-521852e46d6a",
    "__v": 0
  },
  ```  
    

  The __people__ endpoint will give you information about various characters within Studio Ghibli films. Information includes character name, gender, and unique url.  
  ```
  {
    "films": [
      "0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ],
    "id": "ba924631-068e-4436-b6de-f3283fa848f0",
    "name": "Ashitaka",
    "gender": "Male",
    "url": "http://localhost:4000/people/ba924631-068e-4436-b6de-f3283fa848f0",
    "peopleUrl": "http://localhost:4000/people/",
    "__v": 0
  },
  ```  


The __locations__ endpoint will give you information about various locations within Studio Ghibli films. Information includes name, climate, terrain, films, and unique url.  
```
  {
    "url": [
      "http://localhost:4000/locations/11014596-71b0-4b3e-b8c0-1c4b15f28b9a"
    ],
    "id": "11014596-71b0-4b3e-b8c0-1c4b15f28b9a",
    "name": "Irontown",
    "climate": "Continental",
    "terrain": "Mountain",
    "films": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    "__v": 0
  },
  ```

  ## Searching  
You can search the API in several different way. You can search at the __/films__, __/people__, and __/locations__ endpoint by using their respective __id__. 
```
http://localhost:4000/films/12cfb892-aac0-4c5b-94af-521852e46d6a
```
You can also search for movies by a specific director using the endpoint __/films/director/**nameOfDirector**__  
![Director Search](./assets/apigifdirector.gif)  

## Creating, Updating, and Deleting
You can create a new person at the endpoint __/people/create__.
You can update an existing person using their __id__ at the endpoint __/people/update__.
You can delete a person or a film at *their-respective-endpoints/*__delete__ using their __id__.


### Technologies Used  
Javascript, MongoDB, Mongoose, Express.js, Node.js, Heroku.  


_README banner image from http://www.fanpop.com/_