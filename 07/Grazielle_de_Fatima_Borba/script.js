let titulo = document.getElementById("idTitulo");
titulo.innerHTML = 'Trailer do mior filme de ação <3';

let imagem = document.querySelector("#idImagem");
imagem.innerHTML = '<img src="https://o.remove.bg/downloads/41b71a97-278a-4226-9568-2df8e8aba7e6/624c1ad590f7b68460cf0e6fc206fedb-removebg-preview.png">';

let link = document.querySelector(".link");
link.innerHTML = '<button> Trailer </button>';
link.href = "https://youtu.be/a1w9x5U88jU";


function botao() {

    let lista = document.querySelector("ul");
    lista.innerHTML = "";
    for (let index = 1; index < 11; index++) {
        lista.innerHTML += `<li>${index}</li>`;

    }
}