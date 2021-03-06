![Studio Ghibli Banner](./assets/ghiblibanner.png)  
# Studio Ghibli API  
The [Studio Ghibli API](https://ghibli-api-tse.herokuapp.com/) documents information about the films from Studio Ghibli and information about the characters and locations within the films.  

## Getting Started  

1. Clone the repo
2. Run `npm install`
3. Start a `mongod` server 
4. Run `npm run seed` to seed the data
5. Run `npm run dev` to open a connection to the database

REST routes for the Film model:

| URL                  | Path                    | Method   | Action  | Description                                 |
| -------------------- | ----------------------- | -------- | ------- | ------------------------------------------- |
| `/films`             | `/`                     | `GET`    | #index  | List of all Films                           |
| `/films/`            | `/:id`                  | `GET`    | #show   | Displays a single Film by id                |
| `/films/title`       | `/title/:title`         | `GET`    | #show   | Displays a single Film by title             | 
| `/films/director`    | `/director/:director`   | `GET`    | #show   | Lists all films by a specific director      | 
| `/films/title`       | `/title/:title`         | `GET`    | #show   | Displays a single Film by title             | 
| `/films/delete`      | `/films/delete/:id`     | `DELETE` | #delete | Removes a film from the database by id      |
  

REST routes for the People model:

| URL                  | Path                    | Method   | Action  | Description                                 |
| -------------------- | ----------------------- | -------- | ------- | ------------------------------------------- |
| `/people`            | `/people`               | `GET`    | #index  | List of all People                          |
| `/people/`           | `/:id`                  | `GET`    | #show   | Display a single person by id               |
| `/people/name`       | `/people/name/:name`    | `GET`    | #show   | Display a single person by name             |
| `/people/create`     | `/people/create`        | `POST`   | #create | Creates a new person                        |
| `/people/update`     | `/people/update/:id`    | `PUT`    | #update | Updates an existing persons data            |
| `/people/delete`     | `/people/delete/:id`    | `DELETE` | #delete | Removes a person from the database by id    |  

REST routes for the Locations model:

| URL                  | Path                    | Method   | Action  | Description                                 |
| -------------------- | ----------------------- | -------- | ------- | ------------------------------------------- |
| `/locations`         | `/locations`            | `GET`    | #index  | List of all Locations                       |
| `/locations`         | `/:id`                  | `GET`    | #index  | List a specific location by id              | 
| `/locations/name`    | `/locations/name/:name` | `GET`    | #index  | List a specific location by name            |  

![Director Search](./assets/apigifdirector.gif)  


### Technologies Used  
Javascript, MongoDB, Mongoose, Express.js, Node.js, Heroku.  
  
  
  
- _Dataset from https://ghibliapi.herokuapp.com/_ 
- _README banner image from http://www.fanpop.com/_
