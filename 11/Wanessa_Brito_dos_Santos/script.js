let canvas = document.createElement('canvas');
canvas.width = 1366;
canvas.height = 768;
let ctx = canvas.getContext('2d');
document.body.append(canvas);

document.addEventListener('keydown', movement);
//Iformações
let tamanhoTela = [
    canvas.width / 8 * 7,
    canvas.height / 8 * 7
],
    cordsLimitTelaX = [
        (canvas.width - tamanhoTela[0]) / 2,
        (canvas.width - tamanhoTela[0]) / 2 + tamanhoTela[0]
    ];
let cordsLimitTelaY = [
    (canvas.height - tamanhoTela[1]) / 2,
    (canvas.height - tamanhoTela[1]) / 2 + tamanhoTela[1]
];

//Desenho a tela
//Informações do Personagem
let espaco = 20;
let refY = tamanhoTela[1] / 16;
let refX = tamanhoTela[0] / 16;
let rPers = ((tamanhoTela[1] / 8) / 2) - espaco;
let posPers = [refX * 2 + rPers + espaco, 3];
let corPers = 'powderblue';
//Pontuação
let pontuacaoMax = 0;
let pontuacao = 0;
let gameOver = false;
//Obstaculos 
let obstaculosX = [];
let obstaculosY = [];
let obstaculosEspaco = 10;
let obstaculosLargura = 30;
let velocidadeObstaculos = 5;
let sorteioAnt = 0;
let sorteio = 0;
let velocidade = 2000;
let obstaculosChance = 0;

function ball(r, x, y, cor) {
    ctx.beginPath();
    ctx.arc(x, y * refY, r, 0, Math.PI * 2);
    ctx.fillStyle = cor;
    ctx.closePath();
    ctx.fill();
}

function drawStreet() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.rect(cordsLimitTelaX[0], tamanhoTela[1] / 8 * 2, tamanhoTela[0], tamanhoTela[1] / 8 * 5);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'white';
    for (let i = 4; i <= 14; i += 2) {
        ctx.beginPath();
        ctx.moveTo(cordsLimitTelaX[0], refY * i);
        ctx.lineTo(cordsLimitTelaX[1], refY * i);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.setLineDash([5, 30]);
    ctx.strokeStyle = 'yellow';
    for (let i = 5; i <= 14; i += 2) {
        ctx.beginPath();
        ctx.moveTo(cordsLimitTelaX[0], tamanhoTela[1] / 16 * i);
        ctx.lineTo(cordsLimitTelaX[1], tamanhoTela[1] / 16 * i);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.setLineDash([0, 0]);
}


function draw() {
    ctx.beginPath();
    ctx.rect(cordsLimitTelaX[0], cordsLimitTelaY[0], tamanhoTela[0], tamanhoTela[1])
    ctx.closePath();
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function loop() {
    for (let i = 0; i < obstaculosX.length; i++) {
        if (obstaculosX[i] < posPers[0] + rPers && obstaculosX[0] > posPers[0] - rPers && posPers[1] == obstaculosY[i] / 2 - 1) {
            end();
        }

    }
    clear();
    draw();
    drawStreet();
    ball(rPers, posPers[0], posPers[1] * 2 + 3, corPers);
    ctx.strokeStyle = 'red';
    drawObstaculos();
    ctx.fillStyle = 'white';
    ctx.font = '58px serif'
    ctx.fillText(pontuacao, refX * 13, refY * 3);
    pontuacao++;
    if (gameOver === false)
        requestAnimationFrame(loop);
    else
        endDraw();
}

function movement(e) {
    switch (e.key) {
        case 'ArrowDown':
        case 's':
        case 'S':
            if (posPers[1] * 2 + 3 == 13)
                break;
            else
                posPers[1] += 1;
            break;
        case 'ArrowUp':
        case 'w':
        case 'W':
            if (posPers[1] * 2 + 3 == 5)
                break;
            else
                posPers[1] -= 1;
            break;
        case 'R':
        case 'r':
            if(gameOver===true)
                resetGame();
    }
}

function drawObstaculos() {
    ctx.fillStyle = 'red';
    for (let i = 0; i < obstaculosX.length; i++) {
        if (obstaculosX[i] < cordsLimitTelaX[0]) {
            obstaculosX.splice(i, 1);
            obstaculosY.splice(i, 1);
        }
        else {
            ctx.beginPath();
            ctx.rect(obstaculosX[i], obstaculosY[i] * refY, obstaculosLargura, refY * 2)
            ctx.closePath();
            ctx.fill();
            obstaculosX[i] -= velocidadeObstaculos;
        }
    }
}

function obstaculosGerador(j) {
    for (let i = 0; i < j; i++) {
        obstaculosX.push(cordsLimitTelaX[0] + refX * 16 - obstaculosLargura);
        sorteioAnt = sorteio;
        sorteio = Math.floor(Math.random() * 5 + 1) * 2 + 2;
        do {
            sorteio = Math.floor(Math.random() * 5 + 1) * 2 + 2;
        } while (sorteio == sorteioAnt);
        obstaculosY.push(sorteio);
    }
}

function intervalo() {
    let interval = setInterval(() => {
        obstaculosChance = Math.floor(Math.random() * 20 + 1)
        switch (obstaculosChance) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                obstaculosGerador(2);
                break;
            case 7:
            case 8:
            case 9:
                obstaculosGerador(3);
                break;
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
                obstaculosGerador(1);

        }
        clearInterval(interval);
        if (velocidade > 400)
            velocidade -= 10;
        if (velocidadeObstaculos < 20)
            velocidadeObstaculos += 0.2;
        intervalo();
    }, velocidade);
}
intervalo();

function end() {
    pontuacaoMax = pontuacao;
    clear();
    gameOver = true;
}

function endDraw() {
    ctx.beginPath();
    ctx.rect(cordsLimitTelaX[0], cordsLimitTelaY[0], tamanhoTela[0], tamanhoTela[1]);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.font = '90px serif';
    ctx.fillText('Pontuação', refX * 3, refY * 7);
    ctx.fillText(pontuacaoMax, refX * 3, refY * 9);
    ctx.fillText("Pressione 'R' para reiniciar", refX * 3, refY * 11)
}

function resetGame() {
    //Pontuação
    pontuacaoMax = 0;
    pontuacao = 0;
    gameOver = false;
    //Obstaculos 
    obstaculosX = [];
    obstaculosY = [];
    velocidadeObstaculos = 5;
    sorteioAnt = 0;
    velocidade = 2000;
    obstaculosChance = 0;
    loop();
}
requestAnimationFrame(loop);

