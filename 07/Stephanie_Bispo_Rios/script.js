function fazerAlgo() {
    console.log('Fiz algo');
    elemento4.value = 'fiz algo'  ;
}

window.addEventListener('DOMContentLoaded', function() {
    var elemento1 = document.getElementById('elemento1');
    var elemento2 = document.querySelector('.elemento');
    var elemento3 = document.querySelector('p');
    var elemento4 = document.querySelector('input');

    // Definindo o conteúdo do elemento1
    var conteudoElemento1 = '';
    for (var i = 1; i <= 10; i++) {
        conteudoElemento1 += '<li>' + i + '</li>';
    }
    elemento1.innerHTML = conteudoElemento1;

    // Definindo o conteúdo do elemento2
    var conteudoElemento2 = 'Conteúdo do elemento 2';
    elemento2.textContent = conteudoElemento2;

    // Definindo o conteúdo do elemento3
    var conteudoElemento3 = 'Conteúdo do elemento 3';
    elemento3.textContent = conteudoElemento3;

    // Definindo o valor do elemento4
    var valorElemento4 = 'Valor do elemento 4';
    elemento4.value = valorElemento4;
});






