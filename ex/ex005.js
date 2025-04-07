//5. Faça um Programa que converta metros para centímetros.

const prompt = require('prompt-sync')();

metros = parseInt(prompt("Digite para converter de metros para centímetros\n"));

converter = metros *100;

console.log(`${metros} metros convertido para cm:\n ${converter}cm`)
