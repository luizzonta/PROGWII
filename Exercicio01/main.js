const nome = "Fabricio";
const idade = 31;

console.log(nome, " - ", idade);
// console.log(typeof nome, " - ", typeof idade);
console.log(typeof nome);
console.log(typeof idade);

// if, if ternário
console.log(idade >= 18 ? "Maior de Idade" : "Menor de Idade");

const maiorDeIdade = idade >= 18;
if (maiorDeIdade) {
  console.log("Maior de Idade");
} else {
  console.log("Menor de Idade");
}

// Servidor web para google chrome
// https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb
