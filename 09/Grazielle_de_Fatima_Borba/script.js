let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');

mostradorJogador.innerHTML = jogadorAtual;

for (const casa of casas) {
  casa.onclick = jogar;
}

function jogar() {
  if (this.innerHTML == '') {
    this.innerHTML = jogadorAtual;
    trocaTurno();
    trocaJogador();
    mostradorJogador.innerHTML = jogadorAtual;
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
  let empate = verificaEmpate();
  let ganhou = verificaFim();

  if (ganhou) {
    cabecalho.innerHTML = `${jogadorAtual} ganhou!Parabens!`;
    bloqueiaCelulas();
  } else if (empate) {
  cabecalho.innerHTML = 'Deu velha!';
  bloqueiaCelulas();
  }
}

  function verificaEmpate() {
    for (const casa of casas) {
      if (casa.innerHTML === '') {
        return false;
      }
    }
    return true;
  }
 

function verificaFim() {

  let verifica = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  for (const caso of verifica) {
    if (casas[caso[0]].innerHTML == casas[caso[1]].innerHTML &&
      casas[caso[0]].innerHTML == casas[caso[2]].innerHTML &&
      casas[caso[0]].innerHTML != '')
      return true
  }
  return false;
}

function bloqueiaCelulas() {
  for (const casa of casas) {
    casa.onclick = false;
  }
}