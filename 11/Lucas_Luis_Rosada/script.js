const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let contadorPulos = 0; 
//let contadorAtivo = true;
const contadorElemento = document.getElementById('contador');

const jump = () => {
    mario.classList.add('jump');
    var audio = new Audio('efect/audioj.mp3');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
    });
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

    contadorPulos++; 
    contadorElemento.textContent = contadorPulos; 

    console.log('Contagem de pulos:', contadorPulos);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && marioPosition > 0 && marioPosition < 80){
       // let contadorAtivo = false;
       var audio = new Audio('efect/audioq.mp3');
              audio.addEventListener('canplaythrough', function() {
              audio.play();
        });
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`;

        mario.src="assets/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop);
        alert(perdeuuu);
    }

}, 10);

const restartButton = document.getElementById('restartButton');

const restartPage = () => {
  location.reload();
};

restartButton.addEventListener('click', restartPage);

document.addEventListener('keydown', jump);