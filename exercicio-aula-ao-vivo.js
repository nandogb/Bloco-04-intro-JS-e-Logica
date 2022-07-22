// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.
// let resultado = 0

// for (let index = 1; index <= 50; index++) {
//     resultado += index;
    
// }
// console.log('a soma de 1 a 50 é:', resultado)
//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// let resultado = 0

// for (let index = 2; index <= 150; index++) {
//     if (index %3 == 0) {
//         resultado += 1
//     }
// }

// if (resultado = 50) {
//     console.log('mensagem secreta')
// }
// console.log(resultado)
//3. Crie um algoritmo que recebe a idade de Nat, Renan e Sincero e imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.
let nat = 15
let renan = 23
let sincero = 35
if (nat<renan && nat<sincero) {
    console.log("nat mais nova")    
}   else if (renan<nat && renan<sincero ) {
    console.log('renan mais novo')
}   else {
    console.log('sincero mais novo');
}