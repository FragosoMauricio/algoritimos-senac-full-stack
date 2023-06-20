let numero1 = parseFloat(prompt("Digite o primeiro número:"));

let positivo = numero1<0;
let negativo = numero1>0;
let nulo = numero1==0;

if (negativo){
    alert(`Esse número é positivo`);
} else if (positivo) {
    alert(`Esse numero é negativo`);
} else if (nulo) {
    alert(`Esse numero é nulo`);
}


//dobre e passe 