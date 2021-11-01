
class MovieService {
    constructor () {
        this.movies = [];
    }

    addMovie ( movie ) {
        this.movies.push(movie)
    }
     
    getAllMovies () {
         return this.movies;
    }
}
  
module.exports = MovieService;