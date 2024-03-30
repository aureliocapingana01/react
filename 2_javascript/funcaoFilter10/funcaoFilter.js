//  Filter

const numbers = [25, 33, 37, 54, 58, 43]

// console.log(numbers.filter((number) => number % 2 == 0 ))


// ---------------###############--------------

const produtos = [
  {
    nome: 'Suco de uva Integral', 
    preço: 8.80,
    tipo: 'bebida'
  },
  {
    nome: 'Chocolate', 
    preço: 10.50,
    tipo: 'comida'
  },
  {
    nome: 'Aménduin', 
    preço: 5.30,
    tipo: 'comida'
  },
  {
    nome: 'Suco de laranja', 
    preço: 7.20,
    tipo: 'bebida'
  },
  {
    nome: 'Trufa', 
    preço: 6.60,
    tipo: 'comida'
  },
]

const produtoFiltrados = produtos.filter((produto) => produto.preço < 10 && produto.tipo !== 'bebida')

console.log(produtoFiltrados)