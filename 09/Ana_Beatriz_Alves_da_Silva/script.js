let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');
let jogadas = 0;

mostradorJogador.innerHTML = jogadorAtual;

for (const casa of casas) {
    casa.onclick = jogar;
}

function jogar() {
    this.innerHTML = jogadorAtual;
    this.onclick = false;
    jogadas++;
    trocaTurno();
    trocaJogador();
    mostradorJogador.innerHTML = jogadorAtual;

    if (jogadas === casas.length && !verificaFim()) {
        cabecalho.innerHTML = 'Empate!';
        bloqueiaCelulas();
    }
}


function trocaJogador() {
    if (jogadorAtual === 'X') {
        jogadorAtual = 'O';
    } else {
        jogadorAtual = 'X';
    }
}

function trocaTurno() {
    let ganhou = verificaFim();

    if (ganhou) {
        cabecalho.innerHTML = `${jogadorAtual} ganhou!`;
        bloqueiaCelulas();
    }
}

function verificaFim() {
    let Ganhou = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (x of Ganhou) {
        if (casas[x[0]].innerHTML == casas[x[1]].innerHTML && casas[x[1]].innerHTML == casas[x[2]].innerHTML && casas[x[1]].innerHTML !== '')
            return true;
    }
    return false;
}


function bloqueiaCelulas() {
    if (verificaFim()) {
        for (i of casas) {
            i.onclick = true;
            Object.freeze(i);
        }
    }
} 