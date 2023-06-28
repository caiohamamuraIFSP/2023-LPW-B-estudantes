let atividade = [
    'PELÉ',
    'ZITO',
    'PEPE',
    'COUTINHO',
    'NEYMAR',
    'GIOVANNI',
];

let lista = document.createElement('ul');
let posicao = 1;
for (let item of atividade) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
    if (posicao % 2 == 1)
        itemLista.style.backgroundColor='#F11';
    posicao++;

    
}

let resultado = document.getElementById('resultado');
resultado.append(lista);
