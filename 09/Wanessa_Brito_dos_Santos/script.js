let cabecalho = document.getElementById('cabecalho');
let mostradorJogador = document.getElementById('jogador');
let jogadorAtual = 'X';
let casas = document.getElementsByTagName('td');
let cont = 0;

// // Grid de casas
// // 0 1 2
// // 3 4 5
// // 6 7 8

mostradorJogador.innerHTML = jogadorAtual;

// // Liga todas as células na função jogar
for (const casa of casas) {
    casa.onclick = jogar;
}

function jogar() {  
    cont++;
    this.innerHTML = jogadorAtual;
    this.onclick = false;
    trocaTurno();
    trocaJogador();
    mostradorJogador.innerHTML = jogadorAtual;
    velha ()
}
function trocaJogador() {
    if (jogadorAtual === 'X') {
        jogadorAtual = 'O';
} 
    else {
        jogadorAtual = 'X';
    }
}

function velha (){
   if (cont == 9 && verificaFim()== false){
    alert("Deu velha");
        cabecalho.innerHTML = ("Deu velha");
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
    let Ganhou = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8], [2,4,6]];
    for (x of Ganhou){
        if(casas [x[0]].innerHTML == casas [x[1]].innerHTML && casas [x[1]].innerHTML == casas [x[2]].innerHTML && casas[x[1]].innerHTML !== '')
            return true;
    }
    return false;
}
function bloqueiaCelulas(){
    if (verificaFim()){
        for (i of casas) {
            i.onclick = true;
            Object.freeze (i);
        }
    }
        
}
