let caixoes = [
    'Caixão Siqueira',
    'Caixão Stephen Hawking',
    'Caixão BotaFogo',
    'Caixão Carro Rebaixado',
    'Caixão Caixa de Som',
    'Caixão Cavalos',
    'Caixão Cone, Para Bombados',
    'Caixão Jordan',
    'Caixão Thais Carla',
    
];
let fotografos = [
    'hqdefault.jpg',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]

let lista = document.createElement('ul');

for (let item of caixoes) {
    itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    imagemlista= document.createElement('img');
    imagemlista.innerHTML=fotografos; 
    lista.append(itemLista);
    lista.append(imagemlista);


}

let resultado = document.getElementById('resultado');
resultado.append(lista);
odd=document.getElementsByTagName('li');
for(a in odd){
    if(a%2==1){
        odd[a].style.backgroundColor = '#38499D';
        odd[a].style.borderRadius = '10px';
        odd[a].style.boxShadow = '3.5px 3.5px  0 black';
        odd[a].style.paddingBottom= '15px';
    }
}
