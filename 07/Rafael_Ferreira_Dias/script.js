let title = document.getElementById("title");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let btn = document.querySelector("button");

title.innerHTML = "Conteúdo com JavaScript"
left.innerHTML = "Não usei CHAT-GPT"
btn.innerHTML = 'Mudar cor'

for(let i = 1; i<=10; i++) {
    right.innerHTML += `<li>${i.toFixed(1)}<li>`;
}
btn.addEventListener("click",function(){
    document.body.classList.toggle("fundo");
    right.classList.toggle("fontes");
    title.classList.toggle("fontes");
})