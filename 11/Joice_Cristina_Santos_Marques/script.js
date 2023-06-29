var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var playerRadius = 10;
var playerX = canvas.width / 2;
var playerY = canvas.height / 2;
var playerSpeed = 5;
var stars = [];
var starCount = 5;

for (var i = 0; i < starCount; i++) {
  var star = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    collected: false
  };
  stars.push(star);
}

function drawPlayer() {
  ctx.beginPath();
  ctx.arc(playerX, playerY, playerRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#00FF00";
  ctx.fill();
  ctx.closePath();
}

function drawStars() {
  for (var i = 0; i < starCount; i++) {
    if (!stars[i].collected) {
      ctx.beginPath();
      ctx.rect(stars[i].x, stars[i].y, 20, 20);
      ctx.fillStyle = "#0000FF";
      ctx.fill();
      ctx.closePath();
    }
  }
}

function checkCollision() {
  for (var i = 0; i < starCount; i++) {
    if (!stars[i].collected) {
      var star = stars[i];
      if (
        playerX > star.x &&
        playerX < star.x + 20 &&
        playerY > star.y &&
        playerY < star.y + 20
      ) {
        star.collected = true;
      }
    }
  }

  var allCollected = stars.every(star => star.collected);
  if (allCollected) {
    endGame();
  }
}

function endGame() {
  alert("Parabens, voce ganhou!");
  document.location.reload();
}

function updatePlayerPosition(event) {
  var keyPressed = event.key;

  if (keyPressed === "ArrowUp" && playerY > playerRadius) {
    playerY -= playerSpeed;
  } else if (keyPressed === "ArrowDown" && playerY < canvas.height - playerRadius) {
    playerY += playerSpeed;
  } else if (keyPressed === "ArrowLeft" && playerX > playerRadius) {
    playerX -= playerSpeed;
  } else if (keyPressed === "ArrowRight" && playerX < canvas.width - playerRadius) {
    playerX += playerSpeed;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawStars();
  checkCollision();
}

function gameLoop() {
  draw();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", updatePlayerPosition);

gameLoop();
