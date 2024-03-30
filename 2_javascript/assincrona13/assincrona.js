const fs = require("fs");

//  * Callback
fs.readFile("./assincrona13/index.txt", (err, conteudo) => {
  if (err) {
    console.log("Detectamos um erro ao ler o oconteudo", err);
  } else {
    console.log(String(conteudo));
  }
});
