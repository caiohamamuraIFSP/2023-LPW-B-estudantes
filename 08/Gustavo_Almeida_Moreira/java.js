let ingredientes = [
    '150ml de óleo',
    '150ml de água',
    '150ml de leite',
    '500g de polvilho azedo',
    '13g de sal (1 colher de sobremesa)',
    '3 ovos',
    '200g de queijo meia cura ralado',
    '25g de queijo parmesão ralado'
];

let lista = document.createElement('ol');

for (let item of ingredientes) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);

let todasDivs = document.querySelectorAll('li');
for (let indice in todasDivs) {
    let item = todasDivs[indice];
    if (indice % 2 === 0) {
        item.style.backgroundColor = 'red';
      } else {
        item.style.backgroundColor = 'white';
      }
   
}