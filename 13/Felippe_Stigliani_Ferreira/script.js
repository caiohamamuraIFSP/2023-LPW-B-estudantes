let botao = document.getElementById('btnFilmes');
let listaFilmes = document.getElementById('listaFilmes');

botao.addEventListener('click', adicionaFilmes);

async function adicionaFilmes() {
    botao.remove();
    listaFilmes.innerHTML = "Carregando...";
    let resposta = await fetch('Filmes.json');
    let Filmes = await resposta.json();
    listaFilmes.innerHTML = '';
    for (const item of Filmes) { 
        `<h1>Lançamentos 2023 </h1>`
        listaFilmes.innerHTML += `<h1>${item.titulo}</h1>`
        listaFilmes.innerHTML += `<li>${item.filme}</li>`
        listaFilmes.innerHTML += `<img src="${item.imagem}">`
        listaFilmes.innerHTML += `<h1>${item.horas}</h1>`

    }
}