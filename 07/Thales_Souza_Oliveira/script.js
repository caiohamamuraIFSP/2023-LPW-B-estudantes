function segredogigatonico() {
    let lista = document.querySelector("#primeira");
    for (let i = 1; i < 14; i++) {
        lista.innerHTML += '<li>' + 'FAZ O L ' + i + ' VEZES ' + '</li>';
    }
}
function fazuedi(){
let caixaazul = document.querySelector(".segunda");
caixaazul.innerHTML= '<img scr="https://pbs.twimg.com/media/C2zdGBeWgAASL5P?format=jpg&name=large" alt="fazoedi">';
}
function fundo(){
    let caixaverde=document.getElementById("terceira");
    caixaverde.innerHTML="<style>body{background-color:pink;color:black;}</style>";
}
function loremipsumdolor(){
    let lorem=document.querySelector("#quarta>p");
    lorem.innerHTML = 'Lorem ipsum dolor sit amet consectetur.';
}

