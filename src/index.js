const yargs = require( "yargs" );
const Movie = require( "./utils/movie" );
const MovieService = require( "./utils/movieService" );

const yargv = yargs.argv
const movieService = new MovieService();

const command = yargv.command;
console.log( command );
switch ( command ) {
    case 'add': {
        console.log( 'adding movies' )
        const movieName = yargv.movieName;
        const actor = yargv.actor
        const movie = new Movie( movieName, actor );
        movieService.addMovie( movie );
        console.log( movieService.getAllMovies() );
        break;
    }
    case 'add-multi': {
        console.log( 'adding multiple movies' )
        const movieNames = yargv.movies.split(',')
        const actors = yargv.actors.split( ',' );
        if ( movieNames.length !== actors.length ) {
            console.log("Must have 1 actor per movie")
            break;
        }
        for ( let i = 0; i < movieNames.length; i++ ) {
            const movie = new Movie( movieNames[i], actors[i] );
            movieService.addMovie( movie );
        }
        console.log( movieService.getAllMovies() );
        break    
    }
    default: {
        console.warn( "Command does not exist" );
    }
}

console.log( process.argv )