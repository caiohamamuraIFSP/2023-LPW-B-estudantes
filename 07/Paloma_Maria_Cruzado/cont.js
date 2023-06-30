document.getElementById('primeiro1').innerHTML = 'Primeiro item';

var segundoo2 = document.querySelectorAll('.segundo2');
for (var i = 0; i < segundoo2.length; i++) {
  segundoo2[i].innerHTML = 'Segundo item';
}

var terceiroo3 = document.querySelectorAll('[data-atributo="exemp3"]');
for (var i = 0; i < terceiroo3.length; i++) {
  terceiroo3[i].innerHTML = 'Terceiro item';
}

var quarto4 = document.querySelector('#quarto4');
var listaNumeros = '';
for (var i = 1; i <= 10; i++) {
  listaNumeros += '<li>' + i + '</li>';
}
quarto4.innerHTML = listaNumeros;
