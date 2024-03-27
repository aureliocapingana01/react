let maiorNumero = 0
let userNumber
let menorNumero = 0 

for (let i = 1; i <= 5; i++) {
  userNumber = prompt('Digite um numero: ')
  if(userNumber > maiorNumero) {
    maiorNumero = userNumber
  }
}

console.log('O maior número :', maiorNumero)