let options = document.getElementsByClassName('option');
let image = document.getElementById('image');
let index = 1;
let lista = document.getElementsByTagName('ol');
let recipeOl = document.getElementById('recipe')
let receitas = [[

    '1 caixa ou lata de leite condensado',
    '3 colheres de sopa de chocolate em pó',
    '1 colher de sopa de manteiga',
    '1/4 de uma xícara de leite',
    'MODO DE PREPARO: Coloque todos os ingredientes em uma panela <br> misture até começar a desgrudar do fundo da panela <br> deixe esfriar por aproximadamente 30 minutos',
], [
    'Massa de pastel pronta (quantidade desejada)',
    '2 bloquinhos de um chocolate em barra (de sua preferência)',
    'MODO DE PREPARO: Coloque o chocolate na massa <br> Feche com o auxilio de um garfo',
], [
    '1 caixa de creme de leite',
    '1 caixa de leite condensado',
    '3 limões grandes',
    'Uma pitada de sal',
    'MODO DE PREPARO: misture todos os ingredientes em liquidificador e deixe lá por aproximadamente 5 minutos <br> Coloque em uma travessa e se desejar coloque raspas da casca do limão',
]]


document.onkeydown = function (event) {
    if (event.keyCode == 40 || event.keyCode == 39) {
        if (index < options.length) index++;
        else index = 1;
    }
    if (event.keyCode == 38 || event.keyCode == 37) {
        if (index > 1) index--;
        else index = 4;
    }
    changeOption(index);
}

function changeOption(x) {
    index = x;
    image.src = `image${x}.jpg`
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selected');
    }
    options[x - 1].classList.add('selected');
    showRecipe(x);
}

function showRecipe(x) {
    recipeOl.innerHTML=" ";
    for (let y = 0; y < receitas[x - 2].length; y++) {
        recipeOl.innerHTML+=`<li>${receitas[x-2][y]}</li>`;
    }
    let listaa = document.querySelectorAll('li') 
    for (let item in listaa){
        if (item % 2 == 0) {
            listaa[item].style.backgroundColor="#C1FBA4";
        }
    }
}
