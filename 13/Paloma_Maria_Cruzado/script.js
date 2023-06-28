let botao = document.getElementById('btnkillers');
let listKillers = document.getElementById('listKillers');

const button = document.getElementById('btnkillers');
const intro = document.getElementById('intro');
button.addEventListener('click', function() {
  intro.style.display = 'none';
});


botao.addEventListener('click', addKillers);

async function addKillers() {
    botao.remove();
    listKillers.innerHTML = "aguarde...";
    let resp = await fetch('serial.json');
    let killers = await resp.json();
    listKillers.innerHTML = '';
    for (const item of killers) {
        listKillers.innerHTML += `<li>${item.killer}</li>`
        listKillers.innerHTML += `<p>${item.year}</p>`
        listKillers.innerHTML += `<p>${item.history}</p>`
        listKillers.innerHTML += `<img src="${item.img}">`
    }
}