// Red8uce

// Sempre retorna o que vc esta a acumular ou somar

const numbers = [5, 10, 2, 6, 4];

/*
const somarArr = numbers.reduce((soma, elem) => {
  return elem + soma;
}, 0);

console.log(somarArr)
*/


// +---------------+-----------+-------

const carrinho = [
  { produto: "Arroz", preço: 12.55, qtd: 5 },
  { produto: "carne", preço: 22.35, qtd: 3 },
  { produto: "ovo", preço: 8.05, qtd: 4 },
  { produto: "pão", preço: 6.15, qtd: 8 },
];

const total = carrinho.reduce((soma, item) => {
  return item.preço * item.qtd + soma
}, 0)

console.log(total)