let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');
let reinicar = document.getElementById('reiniciar')
reinicar.style.display = 'none'
let contVelha;
// Grid de casas
// 0 1 2
// 3 4 5
// 6 7 8

mostradorJogador.innerHTML = jogadorAtual;

// Liga todas as células na função jogar
for (const casa of casas) {
  casa.onclick = jogar;
}
function jogar() {  
  // TODO: verificar se o quadro já não está preenchido!
    if(this.textContent != '')
        return;
  // Coloca o conteúdo na célula atual
  this.textContent = jogadorAtual;
  trocaTurno();
  trocaJogador();
  mostradorJogador.innerHTML = jogadorAtual;
}
//Troca jogador
function trocaJogador() {
  if (jogadorAtual === 'X') {
    jogadorAtual = 'O';
  } else {
    jogadorAtual = 'X';
  }
}
//Verifica o fim / troca turno
function trocaTurno() {

  let ganhou = verificaFim();
  if (ganhou) {
    cabecalho.innerHTML = `${jogadorAtual} ganhou!`;
    bloqueiaCelulas();
  } else
      verificaVelha()
}
//Verifica ganhador
function verificaFim() {
    let posGanha = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(i of posGanha) {
        if(casas[i[0]].innerHTML == casas[i[1]].innerHTML && casas[i[1]].innerHTML == casas[i[2]].innerHTML && casas[i[1]].innerHTML !== '')
            return true;
    }
    return false;
}
function bloqueiaCelulas() {
  if(verificaFim()) {
      for(i of casas) {
        i.onclick = false
      }
      reinicar.style.display = 'block'
  }
}
//verificação velha
function verificaVelha() {
  contVelha = 0;
  for(i of casas) {
    if(i.textContent != ''){
      contVelha++
    }
  }
  if(contVelha == 9) {
    alert("Deu velha")
    reinicar.style.display = 'block'
    var img = document.createElement("IMG");
  }
}
//reinicia jogo
function refresh() {
  for(i of casas) {
    i.textContent = ''
    i.onclick = jogar
    jogadorAtual="X"
    cabecalho.innerHTML = `Jogando:${jogadorAtual}`;

}
  reinicar.style.display = 'none'
}