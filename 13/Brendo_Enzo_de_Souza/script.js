let botao = document.getElementById('btnAnimes');
let listaAnimes = document.getElementById('Start');

botao.addEventListener('click', adicionaAnimes);

async function adicionaAnimes() {
    botao.remove();
    listaAnimes.innerHTML = "Carregando...";
    let resposta = await fetch('animes.json');
    let animes = await resposta.json();
    listaAnimes.innerHTML = '';
    for (const item of animes) {
        listaAnimes.innerHTML += `<div class="bory"><h1 class="texto">${item.titulo}</h1><h1 class="texto2">${item.start}</h1></div>`
        listaAnimes.innerHTML += `<img src="${item.imagem}" class="centro">`
    }
}