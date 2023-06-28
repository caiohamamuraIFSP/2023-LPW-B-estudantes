let canvas = document.createElement('canvas');
canvas.width = window.innerHeight;
canvas.height = window.innerWidth;
let ctx = canvas.getContext('2d');
document.body.append(canvas);

raio = 20
let x = 100;
let y = 100;
let velX = 5;
let velY = 7;
let angulo = 0.1;
let velocidadeRotacao = -5;

function bola(x, y, r, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function flor(posX, posY) {
    bola(posX + raio * 1.5, posY, raio, 'rgb(82, 148, 82)');
    bola(posX, posY + raio * 1.5, raio, 'rgb(82, 148, 82)');
    bola(posX - raio * 1.5, posY, raio, 'rgb(82, 148, 82)');
    bola(posX, posY - raio * 1.5, raio, 'rgb(82, 148, 82)');
    // Petalas Rosas
    bola(posX + raio, posY + raio, raio, 'pink');
    bola(posX - raio, posY + raio, raio, 'pink');
    bola(posX - raio, posY - raio, raio, 'pink');
    bola(posX + raio, posY - raio, raio, 'pink');
    bola(posX, posY, raio - 3, 'rgb(250, 250, 131)');
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    flor(x, y);
    if (y >= canvas.height - 2.5 * raio || y < 2.5 * raio) {
        velY *= -1;
    }
    y += velY;
    if (x >= canvas.width - 2.5 * raio || x < 2.5 * raio) {
        velX *= -1;
    }
    x += velX;
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);