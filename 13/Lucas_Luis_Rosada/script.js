let botao = document.getElementById('btquad');
let listaQuad = document.getElementById('listaQuad');

botao.addEventListener('click', adicionaAquad);

async function adicionaAquad() {
    botao.remove();
    listaQuad.innerHTML = "Carregando...";
    let resposta = await fetch('quadrinho.json');
    let quadrinho = await resposta.json();
    listaQuad.innerHTML = '';
    for (const item of quadrinho) {
        listaQuad.innerHTML += `<li>${item.quadrinho}</li>`
        listaQuad.innerHTML += `<img src="${item.quadrinho}">`
    }
}