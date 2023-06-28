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
let resultado = document.getElementById('resultado');

// Cria a tela de carregamento
let telaDeCarregamento = document.createElement('div');
telaDeCarregamento.innerText = 'Carregando...';
resultado.append(telaDeCarregamento);

function adicionarItemAssincrono(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let itemLista = document.createElement('li');
            itemLista.innerHTML = item;
            lista.append(itemLista);
            resolve();
        }, 1000); //
    });
}

async function carregarListaAssincrona() {
    // Exibe a mensagem enquanto carrega
    telaDeCarregamento.innerText = 'Carregando... ( oi talvez eu tenha tido problemas em fazer o json)';

    for (let item of jogos) {
        await adicionarItemAssincrono(item);
    }
    
    // Remove a tela de carregamento após o carregamento da lista
    telaDeCarregamento.remove();
    
    // Adiciona a lista ao resultado
    resultado.append(lista);
}

carregarListaAssincrona();
