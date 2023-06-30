var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var obj = {
  x: 50,
  y: 50,
  raio: 20,
  cor: 'red',
  velocidadeX: 2,
  velocidadeY: 2
};


function desenharObj() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(obj.x, obj.y, obj.raio, 0, 2 * Math.PI);
  ctx.fillStyle = obj.cor;
  ctx.fill();
  ctx.closePath();
}


function atualizarObj() {
  if (obj.x + obj.raio > canvas.width || obj.x - obj.raio < 0) {
    obj.velocidadeX *= -1;
  }

  if (obj.y + obj.raio > canvas.height || obj.y - obj.raio < 0) {
    obj.velocidadeY *= -1;
  }

  obj.x += obj.velocidadeX;
  obj.y += obj.velocidadeY;
}


function animar() {
  desenharObj();
  atualizarObj();
  requestAnimationFrame(animar);
}

animar();
