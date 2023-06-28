let canvas = document.getElementById('meu-quadro');
let download = document.getElementById('download');
let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight - 10;
canvas.width = window.innerWidth;

const RAIO_BOLA = 20;

function quadrado(x, y) {
    ctx.drawImage(download, x, y, 50, 50)
}

let x = RAIO_BOLA;
let y = RAIO_BOLA;
let velX = 2;
let velY = 2;

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    quadrado(x, y);
    x += velX;
    y += velY;

    if (x > (canvas.width - RAIO_BOLA))
        velX *= -1;
    if (y > (canvas.height - RAIO_BOLA))
        velY *= -1;
    if (x < RAIO_BOLA)
        velX *= -1;
    if (y < RAIO_BOLA)
        velY *= -1;

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);