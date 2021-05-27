const movies = require("../data/movies");

const sendBestMovies = () => {
  const moviesAboveSeven = movies.filter(movie => movie.vote_average >= 7);
  const average =
    moviesAboveSeven.reduce((total, current) => {
      return (total += current.vote_average);
    }, 0) / moviesAboveSeven.length;

  return `a) Más votadas.

    b) Total de peliculas en cartelera:  ${moviesAboveSeven.length}

    c) Rating promedio: ${average.toFixed(2)}

    d) c) Listado de películas:
     ${moviesAboveSeven
       .map(movie => {
         return `\nPelicula: ${movie.title}\n
         Rating: ${movie.vote_average}\n
       Reseña: ${movie.overview}\n `;
       })
       .join("")}

    `;
};

module.exports = sendBestMovies;
