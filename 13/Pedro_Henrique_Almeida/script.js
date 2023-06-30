let botao = document.getElementById('btnMelhores');
let listaMelhores = document.getElementById('listaMelhores');

botao.addEventListener('click', adicionaMelhores);

async function adicionaMelhores() {
    botao.remove();
    listaMelhores.innerHTML = "Carregando...";
    let resposta = await fetch('melhores.json');
    let Melhores = await resposta.json();
    listaMelhores.innerHTML = '';
    for (const item of Melhores) {
        listaMelhores.innerHTML += `<li>${item.nome}</li>`
        listaMelhores.innerHTML += `<img src="${item.imagem}">`
    }
}


