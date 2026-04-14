/*
Justin Wu
Homework 3 – Objects and exception handling in JS
*/

console.log("Homework 3 - class object and exception handling in JS");

class Movie {
    constructor(title, director, year){
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails(){
        return this.title + " directed by " + this.director + " (" + this.year + ")";
    }
}

class MovieCollection {
    constructor(){
        this.movies = [];
    }

    addMovie(movie){
        this.movies.push(movie);
    }

    removeMovie(title){
        try{
            let index = -1;

            for(let i = 0; i < this.movies.length; i++){
                if(this.movies[i].title === title){
                    index = i;
                }
            }

            if(index === -1){
                throw new Error("Movie not found in collection");
            }

            this.movies.splice(index, 1);
            console.log("Movie removed successfully");

        }catch(error){
            console.error("Error:", error.message);
        }
    }

    showMovies(){
        try{
            if(this.movies.length === 0){
                throw new Error("No movies in the collection");
            }

            for(let i = 0; i < this.movies.length; i++){
                console.log(this.movies[i].getDetails());
            }

        }catch(error){
            console.error("Error:", error.message);
        }
    }
}

let collection = new MovieCollection();

let movie1 = new Movie("Inception", "Christopher Nolan", 2010);
let movie2 = new Movie("Interstellar", "Christopher Nolan", 2014);
let movie3 = new Movie("Titanic", "James Cameron", 1997);

collection.addMovie(movie1);
collection.addMovie(movie2);
collection.addMovie(movie3);

console.log("\n--- Showing Movies ---");
collection.showMovies();

console.log("\n--- Removing a Movie ---");
collection.removeMovie("Interstellar");

console.log("\n--- Showing Movies After Removal ---");
collection.showMovies();

console.log("\n--- Attempting to Remove Non-Existing Movie ---");
collection.removeMovie("Avatar");

console.log("\n--- Removing All Movies ---");
collection.removeMovie("Inception");
collection.removeMovie("Titanic");

console.log("\n--- Attempting to Show Movies When Empty ---");
collection.showMovies();
