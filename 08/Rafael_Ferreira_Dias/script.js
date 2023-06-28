h1 = document.createElement('h1')
h1.innerHTML = 'Periféricos PC'
document.body.append(h1)
let listaSetup = ["Memória RAM","Teclado","Processador","Placa mãe","Cooler","Gabinete","Monitor"]
let lista = document.createElement("ul")

for(elemento of listaSetup) {
    elementoLista = document.createElement("li")
    elementoLista.innerHTML = elemento
    lista.append(elementoLista)
}
document.body.append(lista)
odd = document.getElementsByTagName('li')

for(a in odd) {
	if(a % 2 == 1)
		odd[a].style.backgroundColor = '#c6ac8f'
}