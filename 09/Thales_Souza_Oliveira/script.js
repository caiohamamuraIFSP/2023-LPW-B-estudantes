var vitoria;
let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');
let contador;


mostradorJogador.innerHTML = jogadorAtual;

// Liga todas as células na função jogar
for (const casa of casas) {
  casa.onclick = jogar;
}

function jogar() {  

    if (this.textContent != '')
        return;
  // Coloca o conteúdo na célula atual
  this.innerHTML = jogadorAtual;

  trocaTurno();
  trocaJogador();
  mostradorJogador.innerHTML = jogadorAtual;
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
     vitoria=1;
   }
   else{
    idosa();
   }
}

function verificaFim() {
 
  let possibilidadevitoriasla =[ [0,1,2],[0,3,6],[2,5,8],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2] ]
for( i of possibilidadevitoriasla){
    if(casas[i[0]].innerHTML == casas[i[1]].innerHTML && casas[i[1]].innerHTML == casas[i[2]].innerHTML && casas[i[2]].innerHTML != '')
        return true;
}
  // quando linhas/colunas/diagonais forem todas X ou O
  return false;
}

function bloqueiaCelulas() {
  
  if(verificaFim()){
    for(i of casas){
        i.onclick = false;
    }
  }
} 
// Grid de casas
// 0 1 2
// 3 4 5
// 6 7 8
function idosa(){
  //contador
  geriatrica=0;
  //é vazio?
  for(i of casas) {
    if(i.textContent!=''){
      geriatrica++
    }
  }
  //deu idosa
  if(geriatrica==9) {
    alert("Deu velha")
    reinicar.style.display = 'block'
  }
}
function reset(){
  for(i of casas){
    i.textContent = '';
    cabecalho.innerHTML = 'Jogando: <span id="jogador"></span>'
    mostradorJogador = document.getElementById('jogador');
    mostradorJogador.innerHTML = jogadorAtual;
  }
  reinicar.style.display = 'none';

}