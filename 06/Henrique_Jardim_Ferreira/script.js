function botao() {
    resul1.innerHTML = (valor1_1.valueAsNumber + valor2_1.valueAsNumber + valor3_1.valueAsNumber + valor4_1.valueAsNumber)/4;
    resul2.innerHTML = (valor1_2.valueAsNumber + valor2_2.valueAsNumber + valor3_2.valueAsNumber + valor4_2.valueAsNumber)/4;
    resul3.innerHTML = (valor1_3.valueAsNumber + valor2_3.valueAsNumber + valor3_3.valueAsNumber + valor4_3.valueAsNumber)/4;
    resul4.innerHTML = (valor1_4.valueAsNumber + valor2_4.valueAsNumber + valor3_4.valueAsNumber + valor4_4.valueAsNumber)/4;
    color();
    bola.classList.add('gira');
    setTimeout(stop,300);
}
function stop(){
    bola.classList.remove('gira');
}

function color(){
    //Matéria 1
    if( +resul1.textContent < 6) {
        resul1.className='low'
    } else if ( +resul1.textContent == 6) {
        resul1.className='medium'
    } else if ( +resul1.textContent <= 10 ){
        resul1.className='high'
    } else {
        alert("Alguma média está acima do máximo ou inválida!");
        resul1.className='nothing'
    }
    //Matéria 2
    if( +resul2.textContent < 6) {
        resul2.className='low'
    } else if ( +resul2.textContent == 6) {
        resul2.className='medium'
    } else if ( +resul2.textContent <= 10 ){
        resul2.className='high'
    } else {
        resul2.className='nothing'
        alert("Alguma média está acima do máximo ou inválida!");
    }
    //Matéria 3
    if( +resul3.textContent < 6) {
        resul3.className='low'
    } else if ( +resul3.textContent == 6) {
        resul3.className='medium'
    } else if ( +resul3.textContent <= 10 ){
        resul3.className='high'
    } else {
        resul3.className='nothing'
        alert("Alguma média está acima do máximo ou inválida!");
    }
    //Matéria 4
    if( +resul4.textContent < 6) {
        resul4.className='low'
    } else if ( +resul4.textContent == 6) {
        resul4.className='medium'
    } else if ( +resul4.textContent <= 10 ){
        resul4.className='high'
    } else {
        resul4.className='nothing'
        alert("Alguma média está acima do máximo ou inválida!");
    }   
}
