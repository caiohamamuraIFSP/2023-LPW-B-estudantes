let atividade = [
    'Wandinha; ',
    'Black Mirror;',
    'Elite;',
    'Laços Maternos;',
    'Eu nunca... ;',
    'Casamento as Cegas Brasil;',
    'Manifest;',
    'Gilmore Girls: Tal Mãe, Tal Filha;',
    'Riverdale;',
    'The Society.',
];

let lista = document.createElement('ul');

for (let item of atividade) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let serie = document.getElementById('series');
serie.append(lista);

