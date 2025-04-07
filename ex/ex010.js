//10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit
// F = (C × 9/5) + 32.


const prompt = require('prompt-sync')();

c = parseFloat(prompt("Quantos Graus Celsios está fazendo?\n"))
conversorF = ((c * 9 / 5) + 32)

console.log(`esrá fazendo ${conversorF} Fahrenheit`)