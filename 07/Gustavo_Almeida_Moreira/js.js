js

let titulo = document.getElementById("idTitulo");
titulo.innerHTML = 'atv7';

let imagem = document.querySelector("#idImagem");
imagem.innerHTML = '<img https://st2.depositphotos.com/45820854/44492/v/600/depositphotos_444927606-stock-illustration-monochrone-japanese-sport-car-jdm.jpg">';

let link = document.querySelector(".link");
link.innerHTML = '<button> Motor </button>';
link.href = "https://www.youtube.com/watch?v=iDj53VAfKY8&pp=ygUkY29tbyBmdW5jaW9uYSB1bSBtb3RvciBkZSB1bSBza3lsaW5l";


function botao() {

    let lista = document.querySelector("ul");
    lista.innerHTML = "";
    for (let index = 1; index < 11; index++) {
        lista.innerHTML += `<li>${index}</li>`;

    }
}