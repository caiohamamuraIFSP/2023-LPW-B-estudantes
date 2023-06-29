let botao = document.getElementById('btnJogos');
let listaJogos = document.getElementById('listaJogos')
botao.addEventListener('click', adicionaJogos);

async function adicionaJogos(){
   botao.remove();
   listaJogos.innerHTML = "Carregando...";
   let resposta = await fetch('jogos.json')
   let jogos = await resposta.json();
   listaJogos.innerHTML = '';
   for(const item of jogos )
   {
    listaJogos.innerHTML += `<li>${item.jogo}</li>`
    listaJogos.innerHTML += `<li>${item.ano}</li>`
    listaJogos.innerHTML += `<li>${item.vendas}</li>`
    listaJogos.innerHTML += `<img src="${item.imagem}">`
}
}