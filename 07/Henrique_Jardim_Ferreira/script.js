let element1 = document.getElementById('element1');
element1.innerHTML = '<h1>Titulo</h1><br><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, deserunt.</p>';
element1.style = ('text-align:center; background-color:pink; font-size: 20px;color:whitesmoke;border-radius:1cm;');

let element2 = document.querySelector('#element2');
let formCont=0;
element2.style = ('border-radius:1cm;border:white 1px solid;display:flex;justify-content:center;align-items:center;');
element2.innerHTML='<div class="mutateForm" id="forma0" onclick="mudarForma()"></div>';
let forma = document.querySelector('.mutateForm');
function mudarForma(){
    forma.id='forma'+ formCont;
    if (formCont==3)
        formCont=0;
    else 
        formCont++;
}

let element3 = document.querySelector('img');
element3.src=('image1.png');
let index=1;

setInterval (changePhoto,1000);

function changePhoto() {
   element3.src=('image' + index +'.png');
   if (index<3){
        index++;
   } else {
       index=1;
   }
}
let listCont=new Array();
let listContNum=1;
let element4 = document.querySelector('#element4');
let listaa = document.querySelector ("#list");
let newItem = document.querySelector('#newText');

function addItem(){
    let input = document.querySelector('#newItem');
    listCont[listContNum] = input.value;
    listaa.innerHTML='';
    for(let i=1; i<=listContNum; i++){
        listaa.innerHTML+=( '<li>' + listCont[i] + '</li>');
    }
    listContNum++;
}

function removeItems(){
    for(let i=1; i<=listContNum; i++){
        listCont.pop();
    }
    listContNum=1;
    listaa.innerHTML='';
}