let treino = [
    'Puxada frontal',
    'Remada Cavalinho',
    'Cadeira Extensora',
    'Mesa Flexora',
    'Supino',
    'Elevação Frontal',
    'Elevação Pélvica',
    'Búlgaro',
    'Scoot',
    'Cadeira Abdutora'
];

let lista = document.createElement('ol');

for (let item of treino) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);
