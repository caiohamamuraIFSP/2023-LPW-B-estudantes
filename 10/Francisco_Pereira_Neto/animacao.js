let bolaAzul = document.getElementById('bola-azul');
let pontuacao = document.getElementById('pontuacao');
let pontos = 0;
let intervaloTroca = setInterval(sortearPosicao, 500);


bolaAzul.onclick = function() {
    clearInterval(intervaloTroca);
    alert('Você venceu!');
};

bolaAzul.onmouseenter = function () {
    pontos++;
    pontuacao.innerHTML = pontos;
}

function sortearPosicao() {
    let x = Math.random() * (window.innerWidth - 30);
    let y = Math.random() * (window.innerHeight - 30);

    bolaAzul.style.left = `${x}px`;
    bolaAzul.style.top = `${y}px`;
    
}

