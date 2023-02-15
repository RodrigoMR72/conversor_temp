function somar(n1, n2) {

    return n1 + n2;


}

// console.log(somar(2, 4));

function transformarParaMaiusculo(texto) {

    return texto.toUpperCase();


}

// console.log(transformarParaMaiusculo('texto'));

function textoSoma2Numeros(n1, n2) {

    let soma = somar(n1, n2);
    console.log(soma);

    let texto = 'A soma de ' + n1 + ' com ' + n2 + ' é: '


}

textoSoma2Numeros(10, 20);