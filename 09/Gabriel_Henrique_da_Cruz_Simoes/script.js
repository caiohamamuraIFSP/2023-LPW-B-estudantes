let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');
let jogadas = 0;
let reini = document.getElementById('retro');
let contVelha = 0;


mostradorJogador.innerHTML = jogadorAtual;



function mouseEncima() {
    if (jogadorAtual == 'X') {
        this.style.backgroundColor = "red"
    }
    else{
        this.style.backgroundColor = "blue"
    }
}

function mouseSaiu() {
    this.style.backgroundColor = "white"
    }

for (const casa of casas) {
  casa.onclick = jogar;
  casa.addEventListener('mouseover', mouseEncima);
  casa.addEventListener('mouseleave', mouseSaiu);
}

function jogar() {
  reini.style.display = 'none'

  jogadas++
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
  let ganhou = verificaFim();



  if (ganhou) {
    cabecalho.innerHTML = `${jogadorAtual} ganhou!`;
    bloqueiaCelulas();
  }
  if (jogadas == 9 && casas != verificaFim){
    cabecalho.innerHTML = `empate`;
    bloqueiaCelulas();
  }

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
    reini.style.display = 'block'

  }
}
  function reiniciar(){

    for (const item of casas) {
      item.innerHTML = ``;
      
      item.onclick = jogar
      
    }
    jogadas = 0
    cabecalho.innerHTML = 'Jogando: <span id="jogador"></span>';
    mostradorJogador = document.getElementById('jogador');
    mostradorJogador.innerHTML = "X";
      
   
}