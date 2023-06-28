
var jogador1, jogador2, jogadorAtual, index = null
var formas = ['X', 'O']
var tabuleiro = new Array(9)

function Jogador(nome, forma) {
    this.nome = nome
    this.forma = forma
}

window.onload =	function() { 
    document.getElementById('game').style.display = 'none'
}

function iniciarJogo() {
    var nomeJogador1 = document.getElementById('jogador1').value
    var nomeJogador2 = document.getElementById('jogador2').value

    if (nomeJogador1 == '')
        nomeJogador1 = 'Jogador 01'
    if (nomeJogador2 == '')
        nomeJogador2 = 'Jogador 02'

    jogador1 = new Jogador(nomeJogador1, 0) 
    jogador2 = new Jogador(nomeJogador2, 1) 

    jogadorAtual = jogador1
    setLabelJogadorAtual()

    
    document.getElementById('game').style.display = 'block'
    document.getElementById('jogadores').style.display = 'none'
}

setValorCelula = function(celula, posicao) { 
    if(tabuleiro[posicao] == undefined) {
        celula.innerHTML = formas[jogadorAtual.forma]
        tabuleiro[posicao] = formas[jogadorAtual.forma]

        if (jogadorAtual.forma == 0)
            jogadorAtual = jogador2
        else
            jogadorAtual = jogador1
        setLabelJogadorAtual()
    }

    verificaLinhas()
    verificaColunas()
    verificaDiagonais()

    if (fimDeJogo() ) {
        alert ('Jogo empatou')
        reset()
    }
}

function fimDeJogo() {
    var qtdCelulas = 0
        for(var i = 0; i < tabuleiro.length; i++)
            if(tabuleiro[i]	!= undefined) 
                qtdCelulas++
        return qtdCelulas == tabuleiro.length
}

function verificaLinhas() {
    for( var i = 0; i < 7; i += 3) {
        if ( tabuleiro[i] == 'X' && tabuleiro[i + 1] == 'X' && tabuleiro[i + 2] == 'X' ) { 
            alert (jogador1.nome + ' ganhou!')
            reset()
        }
        if ( tabuleiro[i] == 'O' && tabuleiro[i + 1] == 'O' && tabuleiro[i + 2] == 'O' ) {
            alert (jogador2.nome + ' ganhou!')
            reset()
        }
    }
}

function verificaColunas() {
    for( var i = 0; i < 3; i++) {
        if ( tabuleiro[i] == 'X' && tabuleiro[i + 3] == 'X' && tabuleiro[i + 6] == 'X' ) { 
            alert (jogador1.nome + ' ganhou!')
            reset()
        }
        if ( tabuleiro[i] == 'O' && tabuleiro[i + 3] == 'O' && tabuleiro[i + 6] == 'O' ) {
            alert (jogador2.nome + ' ganhou!')
            reset()
        }
    }

}

function verificaDiagonais() {
    if ( (tabuleiro[0] == 'X' && tabuleiro[4] == 'X' && tabuleiro[8] == 'X') ||
            (tabuleiro[2] == 'X' && tabuleiro[4] == 'X' && tabuleiro[6] == 'X')) {
        alert (jogador1.nome + ' ganhou!')
        reset()
    } else if ( (tabuleiro[0] == 'O' && tabuleiro[4] == 'O' && tabuleiro[8] == 'O') ||
                (tabuleiro[2] == 'O' && tabuleiro[4] == 'O' && tabuleiro[6] == 'O') ) {
        alert (jogador2.nome + ' ganhou!')
        reset()
    } 
}

function reset() { 
    window.location.reload()
}

function setLabelJogadorAtual() {
    document.getElementById('jogadorAtual').innerHTML = 'Jogador atual:  ' + jogadorAtual.nome
}