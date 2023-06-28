let bolaPreto = document.getElementById('bola-preto');
let pontuacao = document.getElementById('pontuacao');
let pontos = 0;
let intervaloTroca = setInterval(sortearPosicao, 500);


bolaPreto.onclick = function() {
    clearInterval(intervaloTroca);
    alert('Você venceu!');
};

bolaPreto.onmouseenter = function () {
    pontos++;
    pontuacao.innerHTML = pontos;
}

function sortearPosicao() {
    let x = Math.random() * (window.innerWidth - 30);
    let y = Math.random() * (window.innerHeight - 30);

    bolaPreto.style.left = `${x}px`;
    bolaPreto.style.top = `${y}px`;
    
}

