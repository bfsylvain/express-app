const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,  
},
];
const welcomeMsg = (req, res) => {
    res.send("Welcome to my favourite movie list !")
}
const moviesList = (req, res) => {
    res.status(200).json(movies)
}
const findMovies = (req, res) => {
    let wantedMovie = movies.find((movie) => movie.id === parseInt(req.params.id))
    wantedMovie ? res.status(200).json(wantedMovie.title) : res.status(404).send("Not Found")       
}

app.get("/", welcomeMsg)
app.get("/api/movies", moviesList);
app.get("/api/movies/:id", findMovies)


app.listen(port, (err) => {
  if (err) {
    console.error("ayaya something bad happened");
  } else {
    console.log(`Servier is listening on ${port}`);
  }
});
