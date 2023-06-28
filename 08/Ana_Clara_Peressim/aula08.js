let treino = [
    'Búlgaro',
    'Cadeira Extensora',
    'Remada Cavalinho',
    'Supino',
    'Cadeira Abdutora',
    'Mesa Flexora',
    'Scoot',
    'Elevação Pélvica',
    'Elevação Frontal'
];

let lista = document.createElement('ol');

for (let item of treino) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);