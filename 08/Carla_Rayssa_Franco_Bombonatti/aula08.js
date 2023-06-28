let treino = [
    'Hack',
    'Agachamento Livre',
    'Cadeira Extensora',
    'Leg Press',
    'Panturrilha Sentada',
    'Panturrilha em Pé',
    '20min Cardio',
];

let lista = document.createElement('ol');

for (let item of treino) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);