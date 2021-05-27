const theaters = require("../data/theaters");

const sendSucursales = () => {
  const datosDeSalas = theaters.map(theater => {
    return {
      name: theater.name,
      address: theater.address,
      description: theater.description
    };
  });

  return `a) Nuestras salas.

    b) Total de sucursales:  ${theaters.length}

     c) Listado de salas:
     ${datosDeSalas
       .map(salas => {
         return `\Nombre: ${salas.name}\n
       Direccion: ${salas.address}\n 
         Descripción: ${salas.description}\n`;
       })
       .join("")}



    `;
};

module.exports = sendSucursales;
