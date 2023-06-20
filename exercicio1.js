// Solicita ao usuário dois números
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let maior = (numero1 > numero2);
let menor = (numero2 > numero1);

if (maior) {
  alert(`O maior número é:${numero1}`);
} else {
  alert(`O maior numero é: ${numero2}`);
}
//if (menor) {
//  alert(`O maior número é:${maior}`);
//} else {
//  alert(`O maior numero é: ${menor}`);
//}

// Verifica qual é o maior número chatgPS
/*if (numero1 > numero2) {
  alert("O maior número é: " + numero1);
} else if (numero2 > numero1) {
  alert("O maior número é: " + numero2);
} else {
  alert("Os números são iguais.");
}*/

let teste = 3