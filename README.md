![Studio Ghibli Banner](./assets/ghiblibanner.png)  
# Studio Ghibli API  
The __Studio Ghibli API__ documents information about the films from Studio Ghibli and information about the characters within the films.  

## Endpoints  
- films  
- people  

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
    "_id": "5dcc1d7400c92974ba7d7bc4",
    "id": "ba924631-068e-4436-b6de-f3283fa848f0",
    "name": "Ashitaka",
    "gender": "Male",
    "url": "http://localhost:4000/people/ba924631-068e-4436-b6de-f3283fa848f0",
    "peopleUrl": "http://localhost:4000/people/",
    "__v": 0
  },
  ```