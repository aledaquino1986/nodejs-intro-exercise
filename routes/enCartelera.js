const movies = require("../data/movies");

const sendEnCartelera = () => {
  const totalMovies = movies.length;

  const movieList = movies.map(object => {
    return {
      title: object.title,
      overview: object.overview
    };
  });

  return `a) En cartelera

    b) Total de peliculas en cartelera:  ${totalMovies}

    c) Listado de películas:
     ${movieList
       .map(movie => {
         return `\nPelicula: ${movie.title}\n
       Reseña: ${movie.overview}\n `;
       })
       .join("")}

   
    `;
};

module.exports = sendEnCartelera;
