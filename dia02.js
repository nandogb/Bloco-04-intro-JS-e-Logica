//! arrays e listas ##############

// let pizzas = [
//   "Portuguesa",
//   "Charque com Catupiry",
//   "Calabresa",
//   "Lombo com Catupiry",
//   "Mussarela",
//   "Palmito",
//   "Marguerita",
// ];

// pizzas.push("Rúcula com Tomate Seco");

// for (let i = 0; i < pizzas.length; i++) {
//   console.log(i + 1 + " " + pizzas[i]);
// }

//! estruturas de repitção com FOR ##########

// let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let contador = 0; contador < numeros.length; contador++) {
//   let tabuada = 2 * numeros[contador];
//   console.log(tabuada);
// }

//! estruturas de repetião OF ################

// let comida = "Parmegiana";

// for (const isso of comida) {
//     console.log(isso);
// }

// let comidas = ["pizza", "dog", "pão de alho", "bolo de rolo"];

// for (const alimentos of comidas) {
//     console.log(alimentos)

// }

//! estruturas de repetição while/do ###############

// var resultado = []
// var i = 0

// while (i<5) {
//     i += 1
//     console.log(i)
// }

// do {
//     i += 1
// } while (i < 5);
// console.log(i)

//! Excercícios

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
//? 01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// console.log(numbers);

// for (const number of numbers) {
//   console.log(number)

// }

//? 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// for (let index = 0; index < numbers.length; index++) {
//   soma += numbers[index];
// }
// console.log(soma);

//? 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// for (let index = 0; index < numbers.length; index++) {
//   soma += numbers[index];
// }
// console.log(soma / 10);

//? 04 - Como mesmo código do exercício anterior, caso o valo final seja maior que 20, imprima mensagem: "Valor maior que 20". Caso
//? não seja, imprima a mensagem "Valor menor que 20".
// for (let index = 0; index < numbers.length; index++) {
//   soma += numbers[index];
// }
// if (soma / 10 > 20) {
//   console.log("Valor maior que 20");
// } else {
//   console.log("Valor menor que 20");
// }

//? 05 - Utilizando for, descubra qual o maior valor contido no array e imprima-o.
// let maiorNumero = 0

// numbers.forEach((element) => {
//   if (maiorNumero < element) {
//     maiorNumero = element;
//   }
// });

// console.log(`The largest number in the array: ${maiorNumero}`);

//? 06 - descubra valores ímpares do array, se não houver nenhum imprima o resultado "nenhum valor ímpar encontrado".let
// let numerosImpares = [];

// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] & (2 !== 0)) {
//     numerosImpares.push(numbers[index]);
//   }
//   if (numerosImpares === 0) {
//     console.log("nenhum valor ímpar encontrado");
//   }
// }
// console.log(numerosImpares);

//? 07 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// let menorNumero = 100

// numbers.forEach((element) => {
//   if (menorNumero > element) {
//     menorNumero = element;
//   }
// });
// console.log(menorNumero)

//? 08 - Utilizando for, crie um array de 1 a 25 e imprima-o. 09 - imprima o valor das divisões de cada elemento do array por 2
// let novoArray = [];

// for (let index = 1; index < 26; index++) {
//   novoArray.push(index);
// }
// console.log(novoArray);

// for (let index = 0; index < novoArray.length; index++) {
//   let divisoes = novoArray[index] / 2;
//   console.log(divisoes);
// }
