let carregar = document.getElementById('carregar');
let caixoes = document.getElementById('caixoes');
carregar.addEventListener('click', carregarcaixoes);

async function carregarcaixoes() {
    carregar.remove();
    caixoes.innerHTML = 'Carregando...';
    let resposta = await fetch('caixoes.json');
    let caixaozin = await resposta.json();
    caixoes.innerHTML = '';
    for (const caixao of caixaozin) {
        caixoes.innerHTML +=
        `<li>${caixao.nome}</li>`
    }
}