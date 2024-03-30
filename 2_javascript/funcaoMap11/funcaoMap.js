// map : precorre o array original e transforma ele em outro array com algumas mudancas

const arrNumber = [32, 55, 14, 16, 28, 43, 29];

// console.log(arrNumber.map((number) => number ** 2 ))

const carrinho = [
  { produto: "Arroz", preço: 12.55, qtd: 5 },
  { produto: "carne", preço: 22.35, qtd: 3 },
  { produto: "ovo", preço: 8.05, qtd: 4 },
];

console.log(
  carrinho.map((item) => {
    return {
      ...item,
      total: (item.preço * item.qtd).toFixed(2),
    };
  })
);
