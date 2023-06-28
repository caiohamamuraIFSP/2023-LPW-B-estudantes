  let header = document.getElementById('header');
  let showPlayer = document.getElementById('player');
  let playerCurrent = 'x';
  let houses = document.getElementsByTagName('td');
  let gameFinished = false;
  let countRounds = 0;
  let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  showPlayer.innerHTML = playerCurrent;
  
  for (const house of houses) {
    house.onclick = toplay;
  }
  
  function toplay() {
    if (gameFinished || this.innerHTML !== '') {
      return;
    }
  
    let line = this.parentNode.rowIndex;
    let column = this.cellIndex;
  
    this.innerHTML = playerCurrent;
    board[line][column] = playerCurrent;
  
    countRounds++;
    if (checkWin(playerCurrent)) {
      header.innerHTML = `${playerCurrent} ganhou!`;
      gameFinished = true;
      disableCells();
      resetButton();
    } else if (countRounds === 9) {
      header.innerHTML = 'houve um empate!';
      gameFinished = true;
      disableCells();
      resetButton();
    } else {
      changePlayer();
      showPlayer.innerHTML = playerCurrent;
    }
  }
  
  function changePlayer() {
    if (playerCurrent == 'x') {
      playerCurrent = 'o';
    } else {
      playerCurrent = 'x';
    }
  }
  
  function checkWin(player) {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player
      ) {
        return true;
      }
    }
  
    // Verificar colunas
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player
      ) {
        return true;
      }
    }
  
    // Verificar diagonais
    if (
      (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
      (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    ) {
      return true;
    }
  
    return false;
  }
  
  function disableCells() {
    for (const house of houses) {
      house.onclick = null;
    }
  }
  
  function resetButton() {
    let buttonRestart = document.getElementById('restart');
    buttonRestart.disabled = false;
  }
  
  function restartGame() {
    for (const house of houses) {
      house.innerHTML = '';
    }
  
    playerCurrent = 'x';
    gameFinished = false;
    countRounds = 0;
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  
    header.innerHTML = 'playing now : <span id="player">' + playerCurrent + '</span>';
  
    let buttonRestart = document.getElementById('restart');
    buttonRestart.disabled = true;
  
    for (const house of houses) {
      house.onclick = toplay;
    }
  
    showPlayer = document.getElementById('player'); // Atualiza a referência ao elemento do jogador atual
    showPlayer.innerHTML = playerCurrent; // Atualiza o jogador atual
  
  }
  