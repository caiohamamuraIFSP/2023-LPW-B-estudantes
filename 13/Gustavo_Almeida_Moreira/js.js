let carregar = document.getElementById('carregar');
let mymario = document.getElementById('mario');
carregar.addEventListener('click', carregarmario);

async function carregarmario() {
    carregar.remove();
    mymario.innerHTML = 'Carregando...';
    let resposta = await fetch('json.json');
    let mario = await resposta.json();
    mymario.innerHTML = '';
    for (const luidi of mario) {
        mymario.innerHTML +=
        `<div><li>${luidi.nome}</li>
        <img src ="${luidi.imagem}">
        </div>`
    }
}