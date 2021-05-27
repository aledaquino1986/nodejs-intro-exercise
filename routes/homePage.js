const movies = require("../data/movies");

const sendMovies = () => {
  const totalMovies = movies.length;
  const orderedMovies = movies
    .sort((a, b) => {
      return a.original_title > b.original_title ? 1 : -1;
    })
    .map(movies => movies.original_title);

  console.log(orderedMovies);
  return `a) Bienvenidos a DH Movies, el mejor sitio para encontrar las mejores peliculas. Incluso mucho mejor que Netflix, Cuevana y PopCorn.

    b) Total de peliculas en cartelera:  ${totalMovies}

    c) Listado de películas ${orderedMovies.join(", ")}

    d) Recordá que podés visitar las secciones:

    i. En Cartelera
    ii. Más Votadas
    iii. Sucursales
    iv. Contacto
    v. Preguntas Frecuentes
    `;
};

module.exports = sendMovies;
