//7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
//A fórmula da área de um quadrado é:A = L²E para mostrar o dobro dessa área:Dobro = 2 × A = 2 × L²


const prompt = require('prompt-sync')();

l = parseFloat(prompt("Digite um número para calcular a area do quadrado dobrada\n"))

area = parseFloat((l * l))
areaDobrada = area + area

console.log(`O dobro da área é:\n ${areaDobrada}`)