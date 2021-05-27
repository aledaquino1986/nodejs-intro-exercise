const homePage = require("./routes/homePage");
const enCartelera = require("./routes/enCartelera");
const masVotadas = require("./routes/masVotadas");
const sucursales = require("./routes/sucursales");
const contacto = require("./routes/contacto");
const faqs = require("./routes/faqs");

const router = (req, res) => {
  switch (req.url) {
    case "/":
      res.end(homePage());
      break;
    case "/en-cartelera":
      res.end(enCartelera());
      break;
    case "/mas-votadas":
      res.end(masVotadas());
      break;
    case "/sucursales":
      res.end(sucursales());
      break;
    case "/contacto":
      res.end(contacto());
      break;
    case "/faqs":
      res.end(faqs());
      break;
  }
};

module.exports = router;
