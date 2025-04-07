// 15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5%  para o sindicato, faça um programa que nos dê:
// a. salário bruto.
// b. quanto pagou ao INSS.
// c. quanto pagou ao sindicato.
// d. o salário líquido.
// e. calcule os descontos e o salário líquido, conforme a tabela abaixo:
// + Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato ( 5%) : R$
// = Salário Liquido : R$


const prompt = require('prompt-sync')();

let salarioH = parseFloat(prompt("Quanto vc ganha por hora?\n"))
let horasT = parseFloat(prompt("Quantas horas voce trabalha no mês?\n"))

let salarioM = parseFloat(horasT * salarioH)

let ir = parseFloat((11 / 100)* salarioM)
let inss = parseFloat(( 8 / 100)* salarioM);
let sindicato = parseFloat((5 / 100)* salarioM);
let salarioL = parseFloat(salarioM - ir - inss - sindicato);

console.log(` Seu salário bruto é de ${salarioM}\n desconto IR (11%) : R$${ir}\n desconto  INSS (8%) :${inss} R$\n desconto Sindicato ( 5%) : ${sindicato}R$\n Salário Liquido : ${salarioL}R$`)
