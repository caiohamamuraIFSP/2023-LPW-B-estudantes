let atividade = [
    'VALORANT',
    'CSGO',
    'AMONG US',
    'STUMBLE GUYS',
    'MINECRAFT',
    'HOGWARTS MISTERY',
    'GTAV',
    'FREE FIRE',
    'FORTNITE'
];

let lista = document.createElement('ol');

for (let item of atividade) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);
