let botao = document.getElementById('btnTreinos');
let listaTreinos = document.getElementById('listaTreinos');

botao.addEventListener('click', adicionaTreinos);

async function adicionaTreinos() {
    botao.remove();
    listaTreinos.innerHTML = "Carregando...";
    let resposta = await fetch('treinos.json');
    let treinos = await resposta.json();
    listaTreinos.innerHTML = '';
    for (const item of treinos) {
        listaTreinos.innerHTML += `<li>${item.treino}</li>`
        listaTreinos.innerHTML += `<img src="${item.imagem}">`
    }
}