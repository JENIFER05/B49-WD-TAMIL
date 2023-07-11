class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
    function getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  
  // Creating an instance of Movie
  var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  var movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG"),
    new Movie("Movie 4", "Studio 4", "PG-13"),
  ];
  
  var pgMovies = getPG(movies);
  console.log(pgMovies);
  