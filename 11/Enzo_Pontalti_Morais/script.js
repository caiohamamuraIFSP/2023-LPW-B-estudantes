document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("gameCanvas");
    var context = canvas.getContext("2d");
    var ballRadius = 10;
    var x = canvas.width / 2;
    var y = canvas.height - 30;
    var dx = 2;
    var dy = -2;
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width - paddleWidth) / 2;
    var rightPressed = false;
    var leftPressed = false;
    var brickRowCount = 3;
    var brickColumnCount = 5;
    var brickWidth = 75;
    var brickHeight = 20;
    var brickPadding = 10;
    var brickOffsetTop = 30;
    var brickOffsetLeft = 30;
    var bricks = [];
    var gameOver = false;
    
    for (var c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
  
    function keyDownHandler(e) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
      }
    }
  
    function keyUpHandler(e) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
      }
    }
  
    function drawBall() {
      context.beginPath();
      context.arc(x, y, ballRadius, 0, Math.PI * 2);
      context.fillStyle = "#0095DD";
      context.fill();
      context.closePath();
    }
  
    function drawPaddle() {
      context.beginPath();
      context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
      context.fillStyle = "#0095DD";
      context.fill();
      context.closePath();
    }
  
    function drawBricks() {
      for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status == 1) {
            var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            context.beginPath();
            context.rect(brickX, brickY, brickWidth, brickHeight);
            context.fillStyle = "#0095DD";
            context.fill();
            context.closePath();
          }
        }
      }
    }
  
    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      
      for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
          var b = bricks[c][r];
          if (b.status == 1) {
            if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
              dy = -dy;
              b.status = 0;
            }
          }
        }
      }
      
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy < ballRadius) {
        dy = -dy;
      } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
        } else {
          gameOver = true;
          context.font = "16px Arial";
          context.fillStyle = "#0095DD";
          context.fillText("VOCÊ PERDEU!!", canvas.width / 2 - 50, canvas.height / 2);
          document.getElementById("restartButton").style.display = "block";
          clearInterval(interval);
        }
      }
      
      if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }
      
      x += dx;
      y += dy;
    }
  
    function restartGame() {
      if (gameOver) {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
        rightPressed = false;
        leftPressed = false;
        bricks = [];
        gameOver = false;
        
        for (var c = 0; c < brickColumnCount; c++) {
          bricks[c] = [];
          for (var r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
          }
        }
        
        document.getElementById("restartButton").style.display = "none";
        interval = setInterval(draw, 10);
      }
    }
  
    var interval = setInterval(draw, 10);
    document.getElementById("restartButton").addEventListener("click", restartGame);
  });