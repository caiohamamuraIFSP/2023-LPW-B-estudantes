let canvas = document.getElementById('bloco');
let ctx = canvas.getContext('2d');
let a_canvas = l_canvas = 500;
function desenha() {
    ctx.clearRect(0,0,l_canvas,a_canvas);
    ctx.beginPath();
    ctx.arc(250, 150, 40, 0, 2 * Math.PI);
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(500, 150, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.style = '#f00';
    ctx.moveTo(250, 250);
    ctx.bezierCurveTo(250, 500, 500, 500, 500, 250);
    ctx.stroke();
}
desenha()