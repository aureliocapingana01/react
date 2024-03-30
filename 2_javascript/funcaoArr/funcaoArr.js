// Exemplos de funcoes de alta ordem
// forEach
const numbers = [44, 51, 7, 23, 66, 91];

// numbers.forEach((elem) => {
//   console.log(elem);
// });

numbers.forEach((elem, index) => {
  // console.log(`O elemento ${elem}  - esta no index ${index}`);
});

// ----------------------------------
// Exemplo do find, util para encontra um elemento dentro do array, retorna uma condicao verdadeira

const encontrado = numbers.find((number) => {
  return number == 91;
});

// console.log(encontrado);

const person = [
  {
    name: "Aurélio",
    age: 20,
  },
  {
    name: "Ana",
    age: 26,
  },
  {
    name: "Abel",
    age: 35,
  },
  {
    name: "Afonso",
    age: 45,
  },
];

const user = person.find((userPerson) => userPerson.age > 30);

// console.log(user)



// ---------------------------------------
// Array - every : verifica se todos os elementos do array seguem uma determinada condicao

// console.log(numbers.every((item) => item > 30))




// --------------------------------------
//some : verifica se algum elemento do array torna verdareira alguma condicao

console.log(numbers.some((number) => number > 0));
