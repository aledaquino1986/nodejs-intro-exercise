const fs = require("fs");
const faqsJson = fs.readFileSync("./data/faqsJson.json", "utf-8");
const faqs = JSON.parse(faqsJson);

const sendfaqs = () => {
  return `a) Preguntas Frecuentes.

  

    b) Total de preguntas:  ${faqs.length}
     
    c) Listado de preguntas:

    ${faqs.faqs
      .map(faq => {
        return `
      Pregunta: ${faq.faq_title}
      Respuesta: ${faq.faq_answer}
      `;
      })
      .join("")}


    `;
};

module.exports = sendfaqs;
