//11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//a. o produto do dobro do primeiro com metade do segundo .
//b. a soma do triplo do primeiro 
// o terceiro elevado ao cubo

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite um número inteiro\n"))
let n2 = parseInt(prompt("Digite um número inteiro\n"))
let n3 = parseFloat(prompt("Digite um número real\n"))

let a = parseFloat((n1 * 2) + (n2 / 2))
let b = parseFloat(3 * n1)
let c = parseFloat((n3* n3)* n3)

console.log(`a =${a}\n b = ${b}\n c = ${c}`)