let carregar = document.getElementById('carregar');
let pokedex = document.getElementById('pokedex');
carregar.addEventListener('click', carregarPokedex);

async function carregarPokedex() {
    carregar.remove();
    pokedex.innerHTML = 'Carregando...';
    let resposta = await fetch('pokemons.json');
    let pokemons = await resposta.json();
    pokedex.innerHTML = '';
    for (const pokemon of pokemons) {
        pokedex.innerHTML +=

    }
}