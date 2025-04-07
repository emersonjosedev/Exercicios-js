// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

const prompt = require('prompt-sync')();

salarioH = parseFloat(prompt("Quanto vc ganha por hora?\n"))
horasT = parseFloat(prompt("Quantas horas voce trabalha no mês?\n"))

salarioM = parseFloat(horasT * salarioH)

