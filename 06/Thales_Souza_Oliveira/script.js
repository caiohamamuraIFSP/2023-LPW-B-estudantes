
// recomendado ver no navegador, live preview zuou a visualização :( 
function result(){
    if (document.querySelector('input[name="operacao"]:checked').value == 1) {
        conta.innerHTML=(n1.valueAsNumber+n2.valueAsNumber);
    }
    else if(document.querySelector('input[name="operacao"]:checked').value == 2){
        console.log("2");
        conta.innerHTML=(n1.valueAsNumber-n2.valueAsNumber);    }
    else if(document.querySelector('input[name="operacao"]:checked').value == 3){
        console.log("3");
        conta.innerHTML=(n1.valueAsNumber*n2.valueAsNumber);
    }
    else if(document.querySelector('input[name="operacao"]:checked').value == 4){
        console.log("4");
        if(n2.valueAsNumber==0){alert("Impossível Dividir por 0!");}
        else{conta.innerHTML=(n1.valueAsNumber/n2.valueAsNumber);}
       
    }
    else{
        alert("INSIRA ALGO VALIDO, BABACA");
    }
   
}