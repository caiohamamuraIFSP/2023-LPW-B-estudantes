let atividade = [
    'Exercicio Log.',
    'Projeto Anel de Giges.',
    'Questionário Rede e Segurança.',
    'Análise de Sistema Projeto.',
    'Aula 08 LPW.',
    'Grupo de leitura - POR.',
    'Questionário de Berg.',
    'PowerPoint Artes.',
    'Lista de física.'
];

let lista = document.createElement('ol');

for (let item of atividade) {
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.append(itemLista);
}

let resultado = document.getElementById('resultado');
resultado.append(lista);
