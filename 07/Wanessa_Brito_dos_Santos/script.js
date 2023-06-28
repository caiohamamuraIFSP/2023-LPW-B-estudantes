function escuro(){
    document.querySelector("#escreve").innerHTML = "O tema escuro ajuda no cansaço da visão";
    var element = document.body;
    element.id="escuro";
}
function claro(){
    document.querySelector("#escreve").innerHTML = "o tema claro é o clasico";
    var element = document.body;
    element.id="claro";
}
function color(){
    document.querySelector("#escreve").innerHTML = "o tema colorido é o mais alegre (é oq eu achokkk)";
    var element = document.body;
    element.id="color";
}
function mar(){
    document.querySelector("#escreve").innerHTML = "O tema fundo do mar é o mais fofo ";
    var element = document.body;
    element.id="mar";
    
}
function exp(){
    document.getElementById("escreve").innerHTML=("Esses botões foram feitos para auxiliar pessoas, além de ser diverto com cores diferentes");
}
//não tive muita criatividade para criar algo com o for
for(i=1;i<=10;i++)
{
    oi.innerHTML += '<li>' + i;
}             