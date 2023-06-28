let botao = document.getElementById('btnmusicas');
let listaSpotify = document.getElementById('ListaSpotify');

botao.addEventListener('click', adicionamusicas);

async function adicionamusicas() {
    botao.remove();
    listaSpotify.innerHTML = "Carregando...";
    let resposta = await fetch('msc.json');
    let musicas = await resposta.json();
    listaSpotify.innerHTML = '';
    for (const item of musicas) {
        listaSpotify.innerHTML += `<H1>${item.musica}</H1>`
        listaSpotify.innerHTML += `<li>${item.cantores}</li>`
        listaSpotify.innerHTML += `<li>${item.ano}</li>`
        listaSpotify.innerHTML += `<li>${item.estilo}</li>`
        listaSpotify.innerHTML += `<li>${item.tempo}</li>`
        listaSpotify.innerHTML += `<img src="${item.imagem}">`
    }
}