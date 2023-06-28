let botao = document.getElementById('btnReceita');
let listaReceita = document.getElementById('listaReceita');
let listaReceita2 = document.getElementById('listaReceita2');

botao.addEventListener('click', adicionaReceita);

async function adicionaReceita() {
    botao.remove();
    listaReceita.innerHTML = "Carregando...";
    let resposta = await fetch('lista.json');
    let lista = await resposta.json();
    listaReceita.innerHTML = '';
    
    for (const item of lista.boloSensacao.massa) {
        listaReceita.innerHTML += `<li>${item}</li>`
        // listaReceita.innerHTML += `<img src="${item.imagem}">`
        
    }
    for (const item of lista.boloSensacao.recheio) {
        listaReceita2.innerHTML += `<li>${item}</li>`
        // listaReceita.innerHTML += `<img src="${item.imagem}">`
        
    }
}