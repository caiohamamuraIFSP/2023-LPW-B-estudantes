
let canvas = document.getElementById('meu-quadro');
let ctx = canvas.getContext('2d');
let logo = document.getElementById('logo-macaco');


function ajustaCanvas() {
    canvas.height = window.innerHeight - 4;
    canvas.width = window.innerWidth;
}
window.onresize = ajustaCanvas;
ajustaCanvas();


let largura_original = 154;
let altura_original = 204;
let escala = 1;
let largura = largura_original * escala;
let altura = altura_original * escala;


let x = 0;
let y = 0;
let velX = 3;
let velY = 3;


let angulo = 0;
let velocidadeRotacao = -5;


function loop(tempo) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    

    ctx.translate(largura/4, altura/4);

   
    ctx.rotate(angulo);

    ctx.translate(-largura/4, -altura/4);


    let xr = (x * Math.cos(angulo) + y * Math.sin(angulo));
    let yr = (y * Math.cos(angulo) - x * Math.sin(angulo));
    

    ctx.drawImage(logo, xr, yr, largura, altura);

    ctx.setTransform();

    
    if ((x + largura) > canvas.width || x < 0) {
        
        velX *= -1;
        velocidadeRotacao *= -1;
        
    }
    if ((y + altura) > canvas.height || y < 0) {
      
        velY *= -1;
        velocidadeRotacao *= -1;
    }

    
    x += velX;
    y += velY;
    angulo += velocidadeRotacao * Math.PI/180;

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
