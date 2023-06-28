let header = document.getElementById('header');
let actualPlay = 'X';
let player = document.getElementById('player');
player.style.color = "red";
let houses = document.getElementsByTagName('td');
let winDecision = false;
let winner = false;
let tie = false;
let xPoint = [0, document.getElementById('xPoint')], oPoint = [0, document.getElementById('oPoint')];
xPoint[1].innerHTML = xPoint[0];
oPoint[1].innerHTML = oPoint[0];
let winSituation = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]];

function resetPoints() {
    xPoint[0]=0;
    oPoint[0]=0;
    xPoint[1].innerHTML = xPoint[0];
    oPoint[1].innerHTML = oPoint[0];
}
function resetSpan() {
    player = document.getElementById('player');
}
//~Reset para CELULARES e COMPUTADORES (não que o site seja responsivel, mas tem que ter '-'):
function restart() {
    for (const house of houses) {
        house.innerHTML = ' ';
        house.onclick = jogar;
        house.style.backgroundColor = 'white';
        house.style.color = 'black';
    }
    winner = false;
    header.innerHTML = 'Jogador Atual: <span id="player"></player>'
    resetSpan();
    actualPlay = 'X';
    player.innerHTML = actualPlay;
    player.style.color = "red";
}
//~Reset para COMPUTADORES:
document.onkeypress = function (event) {
    if (event.key == 'R' || event.key == 'r') {
        for (const house of houses) {
            house.innerHTML = ' ';
            house.onclick = jogar;
            house.style.backgroundColor = 'white';
            house.style.color = 'black';
        }
        winner = false;
        header.innerHTML = 'Jogador Atual: <span id="player"></player>'
        resetSpan();
        actualPlay = 'X';
        player.innerHTML = actualPlay;
        player.style.color = "red";
    }
}

player.innerHTML = actualPlay;
for (const house of houses) {
    house.onclick = jogar;
}

function jogar() {
    if (this.textContent != 'X' && this.textContent != 'O') {
        this.innerHTML = actualPlay;
        verifyWin();
        if (winner != false)
            finish();
        else {
            changePlayer();
            for (const house of houses) {
                if (house.textContent == 'X' || house.textContent == 'O')
                    tie = true;
                else {
                    tie = false
                    break;
                }
            }
            if (tie == true)
                gameTie();
        }
    }
}

function changePlayer() {
    if (actualPlay == 'X') {
        actualPlay = 'O';
        player.style.color = 'blue';
    } else {
        actualPlay = 'X';
        player.style.color = 'red';
    }
    player.innerHTML = actualPlay;
}

/*[ [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]];*/

function verifyWin() {
    //~for percorrendo todos os indices de winSituation
    for (let winDex = 0; winDex < winSituation.length; winDex++) {
        if (houses[winSituation[winDex][0]].textContent == 'X' || houses[winSituation[winDex][0]].textContent == 'O') {
            if (houses[winSituation[winDex][0]].textContent == houses[winSituation[winDex][1]].textContent && houses[winSituation[winDex][0]].textContent == houses[winSituation[winDex][2]].textContent) {
                winner = actualPlay;
                for (let styleChanger = 0; styleChanger < 3; styleChanger++) {
                    houses[winSituation[winDex][styleChanger]].style.backgroundColor = 'rgb(239, 249, 250)'
                    houses[winSituation[winDex][styleChanger]].style.color = 'rgb(255, 0, 0 , 0.8)'
                }
            }
        }
    }
    //~Verificar em cada conjunto de casas se ganhou ou não
    //~Comparar $houses com $winSituation
    //~winSituation[0] = [0,1,2] -> Verificar em cada um dos indices
    //~WinSituation[0][1] //0 ...
    //~houses[0] == houses[1] == houses[2]
    //~houses[0] //houses[winsituation[1,0]]
}

function finish() {
    for (const house of houses) {
        house.onclick = false;
    }
    let winColor = winner == 'X' ? 'red' : 'blue';
    header.innerHTML = `Vitória do Jogador <font color="${winColor}">${winner}</font><span id="player"></span>`
    if (winner == 'X') {
        xPoint[0]++;
        xPoint[1].innerHTML = xPoint[0];
    } else {
        oPoint[0]++
        oPoint[1].innerHTML = oPoint[0];
    }
    resetSpan();
}

function gameTie() {
    header.innerHTML = `Empate<span id="player"></span>`
    resetSpan();
}