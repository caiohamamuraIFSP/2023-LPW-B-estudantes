let atividade = [
    'Pedro - Flamengo',
    'Cano - Fluminense',
    'Popo - Capivariano',
    'Hulk - Atletico',
    'Lele - Volta redonda',
    'Roger Gueddes - Corinthians',
];

let lista = document.createElement('ul');
let posicao = 1;

for (let item of atividade) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
    if (posicao % 2 == 1)
    itemLista.style.backgroundColor='yellow';
    posicao++;

}

let resultado = document.getElementById('resultado');
resultado.append(lista);
