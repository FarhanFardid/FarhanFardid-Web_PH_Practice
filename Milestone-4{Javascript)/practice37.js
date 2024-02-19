// Finding favorite movie from Movies array of object
 let movies =    [
    { 
        title:'Star Wars', 
        director:'George Lucas', 
        year:1977
    },
                
    { 
        title:'The  Dark Knight', 
        director:'Christopher Nolan', 
        year:2008
    }
];
const findTheMovie = (movieTitle, movieYear, arrOfMovies) =>{
    let movDetails;
    for(let i=0; i < arrOfMovies.length; i++){
        let movie = arrOfMovies[i];
        // console.log(movie);
    
        if((movie.title == movieTitle) && (movie.year == movieYear)){
            movDetails = movie;

        }
    }
    // console.log(movDetails)
    return movDetails;

}
 let title = 'Star Wars';
 let year = 1977;
 let result = findTheMovie(title, year, movies);
 console.log(result);