// Inicializa o canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define as propriedades do jogador
const playerWidth = 50;
const playerHeight = 50;
let playerX = 0;
let playerY = canvas.height / 2;

// Define as propriedades do objetivo
const goalSize = 50;
const goalX = canvas.width - goalSize;
const goalY = canvas.height / 2;

// Verifica se o jogador alcançou o objetivo
function checkWin() {
    if (playerX >= goalX && playerX <= goalX + goalSize && playerY >= goalY && playerY <= goalY + goalSize) {
        alert('Você venceu!');
        document.removeEventListener('keydown', handleKeyPress);
    }
}

// Função para desenhar os elementos no canvas
function draw() {
    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha o jogador
    ctx.fillStyle = 'blue';
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);

    // Desenha o objetivo
    ctx.fillStyle = 'red';
    ctx.fillRect(goalX, goalY, goalSize, goalSize);

    // Verifica se o jogador alcançou o objetivo
    checkWin();
}

// Função para atualizar a posição do jogador
function updatePlayerPosition(keyCode) {
    const step = 10;

    switch (keyCode) {
        case 37: // Seta para a esquerda
            playerX -= step;
            break;
        case 38: // Seta para cima
            playerY -= step;
            break;
        case 39: // Seta para a direita
            playerX += step;
            break;
        case 40: // Seta para baixo
            playerY += step;
            break;
    }

    draw();
}

// Função para lidar com os eventos de tecla pressionada
function handleKeyPress(event) {
    updatePlayerPosition(event.keyCode);
}

// Adiciona o evento de tecla pressionada
document.addEventListener('keydown', handleKeyPress);

// Inicia o jogo
draw();