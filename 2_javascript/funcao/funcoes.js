/*
let user = prompt("Digite o seu nome: ");
let course = prompt("Digite o seu curso: ");
*/

function saudacoes(name, script = "Front-End Em React") {
  return `Seja bem vindo(a) ${name}, ao curso de ${script}`;
}

/*
 const msg = saudacoes(user, course);
console.log(msg);
*/

// #################################################
// Funcoes Anonimas

// const user = prompt("Digite um número :");

const dobroNumero = (number) => {
  return number * 2;
};

// const userNumber = dobroNumero(user);
// console.log(userNumber);


// #########################################################
//  Objetos

const userName = prompt("Digite o seu nome: ")
const userAge = prompt('Digite a sua idade: ')

const person = {
  userName,
  userAge
}

const permitir = () => {
  if (person.userAge > 18) {
    return `${person.userName} voce é permitido tirar carteira`
  }
  else {
    return `${person.userName} voce não é permitido tirar carteira`
  }
}

console.log(permitir())