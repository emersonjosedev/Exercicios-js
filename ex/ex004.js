//4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
const prompt = require('prompt-sync')();

n1 = parseFloat(prompt('Digite a n1: \n'));
n2 = parseFloat(prompt('Digite a n2: \n '));
n3 = parseFloat(prompt('Digite a n3:\n'));
n4 = parseFloat(prompt('Digite a n4:\n '));

media = (n1 + n2 + n3 + n4) / 4;

console.log(`sua média é ${media}`);