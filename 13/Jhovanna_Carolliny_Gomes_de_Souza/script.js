let botao = document.getElementById('btnsongs');
let listSongs = document.getElementById('listSongs');

const button = document.getElementById('btnsongs');
const intro = document.getElementById('intro');
button.addEventListener('click', function() {
  intro.style.display = 'none';
});


botao.addEventListener('click', addSongs);

async function addSongs() {
    botao.remove();
    listSongs.innerHTML = "loading...";
    let resp = await fetch('songs.json');
    let songs = await resp.json();
    listSongs.innerHTML = '';
    for (const item of songs) {
        listSongs.innerHTML += `<li>${item.song}</li>`
        listSongs.innerHTML += `<p>${item.year}</p>`
        listSongs.innerHTML += `<p>${item.artist}</p>`
        listSongs.innerHTML += `<p>${item.indicatedby}</p>`
        listSongs.innerHTML += `<img src="${item.img}">`
    }
}