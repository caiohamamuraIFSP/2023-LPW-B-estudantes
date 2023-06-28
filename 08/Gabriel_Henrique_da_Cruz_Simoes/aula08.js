let atividade = [
    'Marcelo - Fluminense',
    'Daniel Alves - Presidio F.C.',
    'Messi - PSG',
    'Cristiano Ronaldo - Al nassr',
    'Johan Cruyff -  Ajax',
    'Romario - Câmara dos deputados',
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
