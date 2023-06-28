// let canvas = document.createElement('canvas');
// let ctx = canvas.getContext('2d');//o contexto da imagem será 2D
// canvas.width = 500;
// canvas.height = 500;
// x = 50 ;
// y = 50;
// document.body.append(canvas);
// ctx.beginPath();
// ctx.clearRect(0,0,500,500)
// ctx.fillStyle = 'pink';
// ctx.rect(x,y, 100,100);
// ctx.fill();
// ctx.closePath();

// requestAnimationFrame(movimento);
// function movimento(){
//     let a = Math.random() * (window.innerWidth - 10);
//     let b = Math.random() * (window.innerHeight - 0);

//     canvas.style.left = `${a}px`;
//     canvas.style.top = `${b}px`;
//     requestAnimationFrame(movimento);
// }

/*CRIAÇÃO DE LINHAS
ctx.moveTo(50,50);//Mover o lápis
ctx.beginPath();//começar a desenhar
ctx.lineTo(100,50);//Linha y e x (cria uma linha)
ctx.lineTo(100, 100);//outra linha, tem a ver com a posição
ctx.closePath();//terminar o desenho
ctx.lineWidth = 10;//tamanho 
ctx.stroke ();//borda
ctx.fill();//preencher
*/

let canvas = document.getElementById('meu-quadro');

let ctx = canvas.getContext('2d');
let x = 0;
let y = 0;
loop (10000000);


function petala(x, y) {
    ctx.beginPath();
    ctx.fillStyle = '#B799FF';
    ctx.arc(x,y,20,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
}

function flor(posicaoX, posicaoY) {
    moveTo(50,50);
    ctx.beginPath();
    ctx.strokeStyle = '#BCE29E';
    ctx.lineTo(100,500);
    ctx.lineTo(100, 100);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.stroke ();
    ctx.fill();

    petala(101, 70);
    petala(101, 130);
    petala (75,80);
    petala(75,115);
    petala(125,119);
    petala(125,84);

    //amarelo
    ctx.beginPath();
    ctx.fillStyle = '#FFE569'; 
    ctx.arc(100,100,18,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();

    ctx.translate(100,500);
    ctx.rotate(0.005);
    ctx.translate(-100,-500);

    
}

function loop(tempo) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    flor(x, y);
    x++;
    y++;
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);


