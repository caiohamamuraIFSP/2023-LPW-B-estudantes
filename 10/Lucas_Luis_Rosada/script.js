// Obtém a referência para o elemento <canvas> no HTML
const canvas = document.getElementById('meu-canvas');

// Obtém o contexto de desenho 2D
const ctx = canvas.getContext('2d');

// Define a cor de preenchimento
ctx.fillStyle = 'blue';

// Desenha um retângulo preenchido
ctx.fillRect(50, 50, 100, 100);

// Define a cor de traço
ctx.strokeStyle = 'red';

// Desenha um retângulo vazio
ctx.strokeRect(150, 50, 100, 100);

// Define a cor de preenchimento do texto
ctx.fillStyle = 'black';

// Define a fonte e o tamanho do texto
ctx.font = '24px Arial';

// Desenha um texto
ctx.fillText('Olá, Mundo!', 50, 200);
