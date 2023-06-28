let bolaRosa = document.getElementById('bola-rosa');
let pontuacao = document.getElementById('pontuacao');
let pontos = 0;
let intervaloTroca = setInterval(sortearPosicao, 500);


bolaRosa.onclick = function() {
    clearInterval(intervaloTroca);
    alert('Você venceu!');
};

bolaRosa.onmouseenter = function () {
    pontos++;
    pontuacao.innerHTML = pontos;
}

function sortearPosicao() {
    let x = Math.random() * (window.innerWidth - 30);
    let y = Math.random() * (window.innerHeight - 30);

    bolaRosa.style.left = `${x}px`;
    bolaRosa.style.top = `${y}px`;
    
}

