![Studio Ghibli Banner](./assets/ghiblibanner.png)  
# Studio Ghibli API  
The __Studio Ghibli API__ documents information about the films from Studio Ghibli and information about the characters within the films.  

## Endpoints  
- films  
- people 
- locations  
- films/director/

## Getting Started  

REST routes for the Film model:

| URL                  | Path                    | Method   | Action  | Description                                 |
| -------------------- | ----------------------- | -------- | ------- | ------------------------------------------- |
| `/films`             | `/`                     | `GET`    | #index  | List of all Films                           |
| `/films/`            | `/films/:id`            | `GET`    | #show   | Displays a single Film by id                |
| `/films/director`    | `/director/:director`   | `GET`    | #show   | Lists all films by a specific director      |

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