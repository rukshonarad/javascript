let movieCollection = {
    movies: [],
    addMovie: function (title, director, genre, year) {
        let movie = {
            title: title,
            director: director,
            genre: genre,
            year: year
        };
        this.movies.push(movie);
    },
    getMovieByTitle: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                return this.movies[i];
            }
        }
    },
    getMovieByGenre: function (genre) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].genre === genre) {
                return this.movies[i];
            }
        }
    },
    updateMovie: function (title, update) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                (this.movies[i].director = update.director),
                    (this.movies[i].genre = update.genre),
                    (this.movies[i].year = update.year);
                return this.movies[i];
            }
        }
    },

    deleteMovie: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                // delete this.movies[i];

                this.movies.splice(i, 1);
            }
        }
    },
    printMovie: function () {
        for (let i = 0; i < this.movies.length; i++) {
            console.log(`title: ${this.movies[i].title}`);
            console.log(`director:${this.movies[i].director}`);
            console.log(`genre:${this.movies[i].genre}`);
            console.log(`year: ${this.movies[i].year}`);
        }
    }
};

movieCollection.addMovie("Best Century", "Tom Jhon", "Adventure", 2022);
movieCollection.addMovie("Squid Game", "Jhon Ming", "Triller", 2019);
movieCollection.addMovie("Spider Man", "Joseph Nikole", "Fantastic", 2002);
console.log(movieCollection.movies);
// Get movie by title
console.log(movieCollection.getMovieByTitle("Best Century"));
//Get movie by genre
console.log(movieCollection.getMovieByGenre("Triller"));
// update movie
console.log(
    movieCollection.updateMovie("Squid Game", {
        director: "Ming Li",
        genre: "Action",
        year: 2020
    })
);
// delete movie
movieCollection.deleteMovie("Spider Man");
//console.log(movieCollection);
// print movie
movieCollection.printMovie();
