let canvas = document.getElementById('meu-quadro');
let ctx = canvas.getContext('2d');
let x = 0;
let y = 100;

ctx.beginPath();
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.closePath();

function quadradoVerde50(posicaoX, posicaoY) {
    ctx.fillStyle = '#0066FF'; //verde
    ctx.fillRect(posicaoX, posicaoY, 50, 50);
}

function loop(tempo) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    quadradoVerde50(x, y);
    x++;
    y;
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
