var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
{
var player = {
x: canvas.width / 2,
y: canvas.height - 30,
width: 50,
height: 50,
speed: 5
};

var obstacles = [];
var score = 0;
var gameOver = false;

function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#000000";
ctx.fillRect(player.x, player.y, player.width, player.height);

ctx.fillStyle = "#9400D3";
obstacles.forEach(function (obstacle) {
ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
});

ctx.fillStyle = "#000000";
ctx.font = "25px Arial";
ctx.fillText("Pontuação: " + score, 20, 20);

if (gameOver) {
ctx.fillStyle = "#000000";
ctx.font = "50px Arial";
ctx.fillText("VOCÊ PERDEU", canvas.width / 2 - 80, canvas.height / 2);
}
}

function update() {
if (gameOver) {
return;
}

if (keys.ArrowLeft && player.x > 0) {
player.x -= player.speed;
}
if (keys.ArrowRight && player.x < canvas.width - player.width) {
player.x += player.speed;
}

obstacles.forEach(function (obstacle) {
obstacle.y += obstacle.speed;

if (
player.x < obstacle.x + obstacle.width &&
player.x + player.width > obstacle.x &&
player.y < obstacle.y + obstacle.height &&
player.y + player.height > obstacle.y
) {
endGame();
}

if (obstacle.y > canvas.height) {
score++;
obstacles.splice(obstacles.indexOf(obstacle), 1);
}
});

if (Math.random() < 0.10) {
var obstacle = {
x: Math.random() * (canvas.width - 20),
y: 0,
width: 20,
height: 20,
speed: Math.random() * 6 + 1
};
obstacles.push(obstacle);
}
}

function gameLoop() {
draw();
update();
requestAnimationFrame(gameLoop);
}

var keys = {};
window.addEventListener("keydown", function (event) {
keys[event.key] = true;
});
window.addEventListener("keyup", function (event) {
delete keys[event.key];
});

function endGame() {
gameOver = true;
alert("Game Over. Pontuação: " + score);
}

gameLoop();
}
