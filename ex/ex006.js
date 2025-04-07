//6. Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.  A = π × r²

const prompt = require('prompt-sync')();

raio = parseFloat(prompt("Digite o raio do círculo\n"))
pi = parseFloat(3.1416)
area = parseFloat(pi * (raio * raio)  )

console.log(area)