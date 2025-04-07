// 13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as
// seguintes fórmulas:
// a. Para homens: (72.7*h) - 58
// b. Para mulheres: (62.1*h) - 44.7


const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Qual a sua altura?\n"))

let aIdealH = parseFloat((72.7 * altura) - 58)
let aIdealF = parseFloat((62.1 * altura) - 44.7)

console.log(` peso ideal do Homem   é de ${aIdealH}\n Peso ideal da Mulher é de ${aIdealF}`)