var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var player = {
  x: 50,
  y: 50,
  width: 20,
  height: 20,
  speed: 5
};

var target = {
  x: 300,
  y: 200,
  width: 30,
  height: 30
};

var gameFinished = false;

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height); 

 
  context.fillStyle = "blue";
  context.fillRect(player.x, player.y, player.width, player.height);

  context.fillStyle = "red";
  context.fillRect(target.x, target.y, target.width, target.height);

  if (gameFinished) {
    context.font = "30px Arial";
    context.fillStyle = "green";
    context.fillText("Você ganhou!", 120, 200);
  }
}

function update() {
  
  if (keys.ArrowUp && player.y > 0) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown && player.y < canvas.height - player.height) {
    player.y += player.speed;
  }
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight && player.x < canvas.width - player.width) {
    player.x += player.speed;
  }

 
  if (
    player.x < target.x + target.width &&
    player.x + player.width > target.x &&
    player.y < target.y + target.height &&
    player.y + player.height > target.y
  ) {
    gameFinished = true;
  }
}


var keys = {};


document.addEventListener("keydown", function(event) {
  keys[event.key] = true;
});


document.addEventListener("keyup", function(event) {
  keys[event.key] = false;
});


document.addEventListener("mousemove", function(event) {
  var rect = canvas.getBoundingClientRect();
  player.x = event.clientX - rect.left - player.width / 2;
  player.y = event.clientY - rect.top - player.height / 2;
});


function gameLoop() {
  if (!gameFinished) {
    update();
  }
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
