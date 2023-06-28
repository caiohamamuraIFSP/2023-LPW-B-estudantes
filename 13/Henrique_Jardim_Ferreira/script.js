let htmlCollectionDots = document.getElementsByClassName('dots');
let dots = [];
let selectedIndex = 0;
let photo = document.querySelector('.actualPhoto');

for (i = 0; i < htmlCollectionDots.length; i++) {
    dots[i] = htmlCollectionDots[i];
}

photo.onclick = nextPhoto;

for (const dot of dots) {
    dot.onclick = changePhotoDot;
}

let informationsDiv = document.querySelector('.informations');
let releaseYearSpan = document.querySelector('.releaseYearSpan');
let priceSpan = document.querySelector('.priceSpan');
let plataformSpan = document.querySelector('.plataformSpan');
let developerSpan = document.querySelector('.developerSpan');

let actualInformations = [];

async function informations(index) {
    informationsDiv.innerHTML = "Carregando...";
    let gameInformations = await fetch('data.json');
    let games = await gameInformations.json();
    informationsDiv.innerHTML = '';
    actualInformations = [];
    for (const item of games) {
        actualInformations.push(item);
    }
    actualInformations = actualInformations[index];
    photo.src = actualInformations.image;
    informationsDiv.innerHTML = actualInformations.game;
    releaseYearSpan.innerHTML = actualInformations.releaseYear;
    priceSpan.innerHTML = actualInformations.price;
    plataformSpan.innerHTML = actualInformations.plataform;
    developerSpan.innerHTML = actualInformations.developer;
}


function changePhoto(i){
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    dots[i].classList.add('selected');
    informations(i);
}

function changePhotoDot() {
    let selected = document.querySelector('.selected');
    let element = dots.indexOf(this);
    selectedIndex = element;
    changePhoto(selectedIndex);
    selected.classList.remove('selected');
    dots[element].classList.add('selected');
}

function nextPhoto() {
    selectedIndex = (selectedIndex++ < dots.length-1) ?
            selectedIndex++ : 0;
    changePhoto(selectedIndex);
}

informations(0);