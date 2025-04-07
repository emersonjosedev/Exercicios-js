//. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// (°F − 32) × 5/9 = °C


const prompt = require('prompt-sync')();
f = parseFloat(prompt("Digite quantos Fahrenheit estão fazendo:\n"));
conversaoC = parseFloat((f - 32)  * 5 / 9);

console.log(`está fazendo ${conversaoC} Graus Celsius`)