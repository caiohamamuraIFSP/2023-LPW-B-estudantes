let botao = document.getElementById('btnJogo');
let listaJogo = document.getElementById('listaJogo');

botao.addEventListener('click', adicionaJogos);

async function adicionaJogos() {
    botao.remove();
    listaJogo.innerHTML = "Carregando...";
    let resposta = await fetch('jogo.json');
    let jogo = await resposta.json();
    listaJogo.innerHTML = '';
    for (const item of jogo) {
        listaJogo.innerHTML += `<li>${item.jogo}</li>`
        listaJogo.innerHTML += `<img src="${item.imagem}">`
    }
}