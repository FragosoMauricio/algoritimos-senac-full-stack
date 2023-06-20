let num = parseInt(prompt(`Digite a primeira nota: `)); //solicita informação
let num2 = parseInt(prompt(`Digite a segunda nota: `));
let num3 = parseInt(prompt(`Digite a terceira nota: `));
let num4 = parseInt(prompt(`Digite a quarta nota: `));


let media = (num + num2 + num3 + num4) / 4;

let entradaInvalida = isNaN(media) //|| media < 0 || nota > 10;
let aprovado = media >=5;
let reprovado = media <5;


if (entradaInvalida) {
    alert(`Entrada inválida \n Digite novamente`);
}
else if (aprovado) {
    alert(`Aprovado! parabéns.`);
} else if (reprovado) {
    alert(`Reprovado!`);
} else {
    alert (`recuperação`);
    let notaRecuperacao = parseFloat(prompt(`Digite nota recuperação: `));
    let mediaRecuperacao = ( media + notaRecuperacao) / 2;
    aprovado = mediaRecuperacao >= 5;
    if (aprovado){
        alert(`Aprovado! parabéns.`);
    } else {
        alert(`Reprovado!`);
    }
}

