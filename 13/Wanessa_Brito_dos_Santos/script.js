let botao1 = document.getElementById('botao');
let receita1 = document.getElementById('receita');
let receita2 = document.getElementById('cook');
let receita3 = document.getElementById('cozinha');
botao1.addEventListener('click', mostraReceita);

async function mostraReceita(){
    botao1.remove();
    receita.innerHTML = "Carregando...";
    let resposta = await fetch('lista.json');
    let lista = await resposta.json();
    receita1.innerHTML = '';
    for (const item of lista.brigadeiro){
        receita1.innerHTML += `<li>${item}</li>`;
    }
    for (const item of lista.pastel){
        receita2.innerHTML += `<li>${item}</li>`;
    }
    for (const item of lista.mousse){
        receita3.innerHTML += `<li>${item}</li>`;
    }
    document.body.append();
}
