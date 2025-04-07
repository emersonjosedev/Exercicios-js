//12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a
//seguinte fórmula: (72.7*altura) - 58

const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Qual a sua altura?\n"))

let aIdeal = parseFloat((72.7 * altura) - 58)

console.log(`Seu peso ideal é de ${aIdeal}kg`)