//Criação do Canva
let canvas = document.getElementById("canvas");
canvas.width = 1280;
canvas.height = 768;
let ctx = canvas.getContext('2d');
document.body.append(canvas);
//sprites (teste)
let img = document.createElement('img');
let fundo=document.createElement('img');
let Jog1 = document.getElementById('jog1');
let Jog2 = document.getElementById('jog2');
let pontosJog1 = 0, pontosJog2 = 0;
img.src = 'viga.png';
const plataforma1 = 550;
const plataforma2 = 300;
const plataforma3 = 300;
/*
            JOGADOR 1
*/


//variáveis referentes a física geral, física do jogador 1 e física do cenário.

const volta = 5;
const atkcolision=15;
// chão = altura geral - colisão - 50px;
const floor = canvas.height - 70;
let y = 230;
let x = 130;
let xAnterior = x;
let yAnterior = y;
const alturaCanvas = 700
let velX = 0;
let velY = 0;
let acellX = 0;
/*

            JOGADOR 2
*/
let y2 = 230;
let y2Anterior = y;
let velX2 = 0;
let velY2 = 0;
let acellX2 = 0;
let x2 = 1030;
//Controle de velocidade
const xlr8 = 4;
const max_speed = 9.25;
const atrict = 0.85;
const impulso = 30;
const g = 1.25;
//LARGURA DOS BONECOS Q MUDA COM O ATAQUE!
const dano = 200;
let lastDirectionP1=1;
let lastDirectionP2=1;
let larg1=70;
let larg2=70;
let atk1 = false;
let atk2 = false;
// eventos teclado. 


document.addEventListener('keydown', press1);
document.addEventListener('keyup', unpress1);

document.addEventListener('keydown', press2);
document.addEventListener('keyup', unpress2);


// Desenho dos objetos
// bixo vermelho
function p1() {
  ctx.beginPath();
  ctx.fillRect(x, y, (larg1*lastDirectionP2), 70)
  ctx.closePath();
  ctx.fillStyle = '#8E8DBE';
  ctx.stroke();
  ctx.fill();
 ctx.shadowBlur = 600;
 ctx.shadowOffsetX = 5;
 ctx.shadowOffsetY = 5;
 ctx.shadowColor = "black";
}
//bixo verde
function p2() {
  ctx.beginPath();
  ctx.fillRect(x2, y2, (larg2*lastDirectionP1), 70)
  ctx.closePath();
  ctx.fillStyle = '#81F495';
  ctx.stroke();
  ctx.fill();
}
//
function bground(){
  fundo.scr="cavepixelart.png";
  ctx.drawImage(fundo, 0,0);
}
function limpa() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  desenhaPlataforma();
  bground();
}
function loop() {
  xAnterior = x;
  yAnterior = y;
  x += velX;
  x2 += velX2;
  y += velY;
  y2 += velY2;
  velX *= atrict;
  velY += g;
  velX2 *= atrict;
  velY2 += g;
  if (y2 >= floor) y2 = 230, x2 = 1030, pontosJog1 ++,Jog1.innerHTML = '', Jog1.innerHTML += `Jogador Verde: ${pontosJog1}`;
  if (y >= floor) y = 230, x = 130, pontosJog2 ++,Jog2.innerHTML = '',Jog2.innerHTML += `Jogador Lilás: ${pontosJog2}`;
  velX += xlr8 * acellX;
  velX2 += xlr8 * acellX2;
  verificaColisao();
  limpa();
  p2();
  p1();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
//------------------------------------------------
function verificaColisao() {
  //Colisão com as plataformas
if (y + 70 >= plataforma1 && yAnterior + 70 <= plataforma1  && x >= 300 && x <= 980) {
  if (velY > 0) {
    y = plataforma1 - 70;
    velY = 0;
  }
}

if (y + 70 >= plataforma2 && yAnterior + 70 <= plataforma2 && x >= 100 && x <= 250) {
  if (velY > 0) {
    y = plataforma2 - 70;
    velY = 0;
  }
} 
  if (y + 70 >= plataforma3 && yAnterior + 70 <= plataforma3 && x >= 1000 && x <= 1130) {
    if (velY > 0) {
      y = plataforma3 - 70;
      velY = 0;
    }
  }

  //P2
if (y2 + 70 >= plataforma1 && y2Anterior + 70 <= plataforma1 && x2 >= 300 && x2 <= 980) {
  if (velY2 > 0) {
    y2 = plataforma1 - 70;
    velY2 = 0;
  }
}  

if (y2 + 70 >= plataforma2 && y2Anterior + 70 <= plataforma2 && x2 >= 100 && x2 <= 250) {
  if (velY2 > 0) {
    y2 = plataforma2 - 70;
    velY2 = 0;
  }
} else if (y2 + 70 < plataforma2 && y2Anterior + 70 >= plataforma1 && x2 >= 100 && x2 <= 250) {
  if (velY2 > 0) {
    y2 = plataforma2 - 70;
    velY2 = 0;
  }
}
if (y2 + 70 >= plataforma3 && y2Anterior + 70 <= plataforma3 && x2 >= 1000 && x2 <= 1130) {
    if (velY2 > 0) {
      y2 = plataforma3 - 70;
      velY2 = 0;
    }
  }
  //Colisão com a parede
  if (x + 70 >= 1280) {
      velX *= 0;
      x -= volta;
    }
  if(x <= 70) {
    velX *= 0;
    x += volta;   
  }
  if (x2 + 70 >= 1280) {
      velX2 *= 0;
      x2 -= volta;
    }
  if(x2 <= 70) {
    velX2 *= 0;
    x2 += volta;  
  }
  //Colisão de ataque
  if((atk1 && x+70+larg1 >= x2) && (y == y2) && x <= x2) {
    velX *= 0;
    x -= atkcolision;
    x2 += dano;
    velY2 = -impulso*0.6;
  }
  if((atk1 && x-larg1 <= x2+70) && (y == y2) && x >= x2) {
    velX *= 0;
    x += atkcolision;
    x2 -= dano;
    velY2 = -impulso*0.6;
  }

  if((atk2 && x2+70+larg2 >= x) && (y >= y2) && x2 <= x) {
    velX2 *= 0;
    x2 -= atkcolision;
    x += dano;
    velY = -impulso*0.6;
  }
  if((atk2 && x2-larg2 <= x+70) && (y == y2) && x2 >= x) {
    velX2 *= 0;
    x2 += atkcolision;
    x -= dano;
    velY = -impulso*0.6;
  }
}
function desenhaPlataforma() {
 //viga principal
  ctx.drawImage(viga,300,550,680,50);
//viga do player 1
  ctx.drawImage(viga,100,300,150,50);
//viga do player 2
 ctx.drawImage(viga,1000,300,150,50);
}
//------------------------------------------------
function press1(e) {
  switch (e.key) {
    case 'a':
      acellX2 = -1;
      lastDirectionP1 = -1 ;
      break;
    case 'd':
      acellX2 = 1;
      lastDirectionP1 = 1;
      break;
    case 'w':
      if (y2 == floor || y2 == plataforma1 - 70 || y2 == plataforma2 -70 || y2 == plataforma3 -70) velY2 = -impulso;
      break;
    case 's':
      larg2 = 140;
      atk2 = 1;
      setTimeout(() => larg2 = 70, 750);
      setTimeout(() => atk2 = 0, 750);
      break;
    default:
      break;
    
  }
}
function unpress1(e) {
  switch (e.key) {
    case 'a':
      if (acellX2 != 0) acellX2 = 0;
      break;
    case 'd':
      if (acellX2 != 0) acellX2 = 0;
      break;
    case 'w':
      if (velY2 != 0) velY2 *= 0.6;
      break;
    case 's':
      larg2=140;
      atk2=1;
      setTimeout(() => larg2 = 70, 1000);
      setTimeout(() => atk2 = 0, 1000);
      break;
    default:
      break;
  }
}


/*
            JOGADOR 1           
*/
function press2(e) {
  switch (e.key) {
    case 'ArrowRight':
      acellX = 1;
      lastDirectionP2=1;
      break;
    case 'ArrowLeft':
      acellX = -1;
      lastDirectionP2= -1;
      break;
    case 'ArrowUp':
      if (y == floor || y == plataforma1 - 70 || y == plataforma2 -70 || y == plataforma3 -70) velY = -impulso;
      break;
    case 'ArrowDown':
      larg1=140;
      atk1=1;
      setTimeout(() => larg1 = 70, 750);
      setTimeout(() => atk1 = 0, 750);
    break;
    default:
    break;
  }
}

function unpress2(e) {
  switch (e.key) {
    case 'ArrowRight':
      if (acellX != 0) acellX = 0;
      break;
    case 'ArrowLeft':
      if (acellX != 0) acellX = 0;
      break;
    case 'ArrowUp':
      if (velY != 0) velY *= 0.6;
      break;
    default:
      break;
  }
}

//------------------------------------------------