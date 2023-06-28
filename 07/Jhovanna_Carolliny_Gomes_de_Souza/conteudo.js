document.getElementById('elemento1').innerHTML = '.conteúdo do elemento 1.';

var elementos2 = document.querySelectorAll('.elemento2');
for (var i = 0; i < elementos2.length; i++) {
  elementos2[i].innerHTML = '.conteúdo do elemento 2.';
}

var elementos3 = document.querySelectorAll('[data-atributo="exemplo3"]');
for (var i = 0; i < elementos3.length; i++) {
  elementos3[i].innerHTML = '.conteúdo do elemento 3.';
}

var elemento4 = document.querySelector('#elemento4');
var listaNumeros = '';
for (var i = 1; i <= 10; i++) {
  listaNumeros += '<li>' + i + '</li>';
}
elemento4.innerHTML = listaNumeros;