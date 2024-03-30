// 1 - funcao que retorna outra funcao como parametro

/*
const welcome = (couserName) => {
  return studantName => {
    console.log( `Ola ${studantName}! seja bem vindo ao curso de ${couserName}`)
  }
}

const welcomeCouser = welcome('Front End')

welcomeCouser('Aurelio')

*/

// 1 - funcao que recebe outra funcao como parametro

let userNumero1 = Number(prompt("Digite um numero: "));
let userNumero2 = Number(prompt("Digite outro numero: "));

const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

// Operacao: é uma funcao que realiza a operacao entre dois numeros, ela recebe dois numeros
const calcular = (n1, n2, operacao) => operacao(n1, n2);

// console.log(calcular(userNumero1, userNumero2, multiplicar))


// O Calculo que eu quero é : (n1 + n2) + (2 * n1 * n2)


// Isso chamasse funcao de alta ordem 
console.log(
  calcular(userNumero1, userNumero2, (n1, n2) => n1 * n2 + 2 * n1 * n2)
);