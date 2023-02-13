function converterToF() {

    let temp = document.getElementById('temp').value;

    //let fahrenheit = Math.round(1.8*celsius + 32, -2) - forma de arredondar com duas casas decimais.
    
    let fahrenheit = 1.8*temp + 32;

    //fahrenheit.toFixed(2);

    // alert('Clicou no Botão Converter');

    // console.log(celsius);
    // console.log(fahrenheit);

    let textoResultado = 'A temperatura de ' + temp + '°C é ' + fahrenheit.toFixed(2).replace('.',',') + '°F.';

    // console.log('A temperatura de ' + celsius + '°C é ' + fahrenheit + '°F.');

    console.log(textoResultado);

    // Atribuindo o valor do texto do resultado final dentro da TAG P, pois sei que na aplicação tem somente uma TAG P, 
    // pois retorna como uma lista como um elemento.

    document.getElementsByTagName('p')[0].innerHTML = textoResultado;

    //A temperatura de 25 °C é 150 °F.

}

function converterToC() {

    let temp = document.getElementById('temp').value;
    
    let celsius = (temp - 32)/1.8;

    let textoResultado = 'A temperatura de ' + temp + '°F é ' + celsius.toFixed(2).replace('.',',') + '°C.';

    console.log(textoResultado);

    document.getElementsByTagName('p')[0].innerHTML = textoResultado;

}

function limpar (){

    document.getElementsByTagName('p')[0].innerHTML = '';

}