let botao = document.getElementById('btnFilmes');
let listaFilmes = document.getElementById('listaFilmes');

botao.addEventListener('click', adicionaFilmes);

async function adicionaFilmes() {
    botao.remove();
    listaFilmes.innerHTML = "Carregando...";
    let resposta = await fetch('filme.json');
    let Filmes = await resposta.json();
    listaFilmes.innerHTML = '';
    for (const item of Filmes) {
        listaFilmes.innerHTML += `<H1>${item.Filme}</H1>`
        listaFilmes.innerHTML += `<li>${item.Sinopse}</li>`
        listaFilmes.innerHTML += `<li>${item.Gênero}</li>`
        listaFilmes.innerHTML += `<li>${item.Duração}</li>`
        listaFilmes.innerHTML += `<img src="${item.Imagem}" />`
    }
}