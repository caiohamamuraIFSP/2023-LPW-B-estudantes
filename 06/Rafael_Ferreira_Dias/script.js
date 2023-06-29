function imc() {
	var altura = parseFloat(document.getElementById('altura').value)
	var peso = parseFloat(document.getElementById('peso').value)
	var resul = document.getElementById('resul')
	var condi = document.querySelector('.condi')
	if(!altura){
		alert("Insira a altura")
	}else if(!peso)
		alert("Insira o peso")

	if(altura>100)
		altura = altura/100

	const IMC = (peso/(altura*altura)).toFixed(2)
	resul.innerHTML = `Resultado ${IMC}`

	if(IMC<18.5){
		condi.innerHTML = 'Situação de magreza'
		condi.className = "danger"
	}
	else if(IMC>18.5 && IMC<24.9){
		condi.innerHTML = 'Situação normal'
		condi.className = "normal"
	}
	else if(IMC>25.0 && IMC<29.9){
		condi.className = "sobrePeso"
		condi.innerHTML = 'Situação de sobrepeso'
	}

	else if(IMC>30.0 && IMC<39.9){
		condi.className = "obeso"
		condi.innerHTML = 'Situação de obesidade'
	}
	else{
		condi.className = "danger"
		condi.innerHTML = "Situação grave"	
	}
}