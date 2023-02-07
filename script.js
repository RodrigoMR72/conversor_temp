function converterToF() {
    let  celsius = document.getElementById('celsius').value;

    //let fahrenheit = Math.round(1.8*celsius + 32, -2) - forma de arredondar com duas casas decimais.
    
    let fahrenheit = 1.8*celsius + 32;

    fahrenheit.toFixed(2);

    // alert('Clicou no Botão Converter');

    // console.log(celsius);
    // console.log(fahrenheit);

    let textoResultado = 'A temperatura de ' + celsius + '°C é ' + fahrenheit.toFixed(2).replace('.',',') + '°F.';

    // console.log('A temperatura de ' + celsius + '°C é ' + fahrenheit + '°F.');

    console.log(textoResultado);

    // Atribuindo o valor do texto do recultado final dentro da TAG P.
    document.getElementsByTagName('p')[0].innerHTML = textoResultado;

    //A temperatura de 25 °C é 150 °F.
}

function limpar (){
    document.getElementsByTagName('p')[0].innerHTML = '';
}