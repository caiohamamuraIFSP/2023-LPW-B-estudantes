let jogos = [
    'The Legend of Zelda: Ocarina of time',
    'Tony Hawk,s Pro Skater 2',
    'Grand Theft Auot IV',
    'Soulcalibur',
    'Super mario galaxy',
    'super mario galaxy 2',
    'red dead redemption 2',
    'Grand theft Auto V',
    'Disco Elysium: The final cut',
    'The Legend of Zelda: Breath of the Wild',
 
];

let lista = document.createElement('ol');

for (let item of jogos) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);
