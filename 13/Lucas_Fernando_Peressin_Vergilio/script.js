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
   
    for (const item of lista.Bolo.Ingredientes) {
        listaReceita.innerHTML += `<li>${item}</li>`
       
    }
    for (const item of lista.Bolo.Recheio) {
        listaReceita2.innerHTML += `<li>${item}</li>`
       
    }
}