document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const enemy = document.getElementById("enemy");
    const tryAgainButton = document.getElementById("try-again-button");
  
    let isColliding = false;
  
    function checkCollision() {
      const playerRect = player.getBoundingClientRect();
      const enemyRect = enemy.getBoundingClientRect();
  
      if (
        playerRect.left < enemyRect.right &&
        playerRect.right > enemyRect.left &&
        playerRect.top < enemyRect.bottom &&
        playerRect.bottom > enemyRect.top
      ) {
        isColliding = true;
        player.style.backgroundColor = "gray";
        enemy.style.backgroundColor = "gray";
      }
    }
  
    function moveEnemy() {
      let direction = 1;
      let enemyX = parseInt(window.getComputedStyle(enemy).left);
  
      setInterval(() => {   
        enemyX += direction;
  
        if (enemyX <= 0 || enemyX >= 350) {
          direction *= -1;
        }
  
        enemy.style.left = enemyX + "px";
      }, 10);
    }
  
    function handleKeyPress(event) {
        if (isColliding) return;
    
        const playerX = parseInt(window.getComputedStyle(player).left);
        const playerY = parseInt(window.getComputedStyle(player).top);
    
        switch (event.key) {
          case "ArrowLeft":
            if (playerX > 0) {
              player.style.left = playerX - 10 + "px";
            }
            break;
          case "ArrowRight":
            if (playerX < 350) {
              player.style.left = playerX + 10 + "px";
            }
            break;
          case "ArrowUp":
            // Lógica para pular (opcional)
            break;
          case "ArrowDown":
            if (playerY < 350) {
              player.style.top = playerY + 10 + "px";
            }
            break;
        }
    
        checkCollision();
      }
    
      document.addEventListener("keydown", handleKeyPress);
    
      moveEnemy();
    });