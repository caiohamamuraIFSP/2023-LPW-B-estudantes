
let canvas = document.getElementById('canvinha');
let ediserafim = document.getElementById('edivaldo');
let ctx = canvas.getContext('2d');
function adjust() {
    canvas.height = window.innerHeight - 10;
    canvas.width = window.innerWidth;
}
window.onresize = adjust;
adjust();
// 
let larg= 128;
let alt= 128;
let x = 0;
let y = 0;
let velX = 5;
let velY = 5;
//
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x++;
    y++;
    ctx.drawImage(ediserafim, x, y, larg, alt);
    (y+alt)>canvas.height || (alt+y <= 0)  ? velY*=-1 : velY*=1;
    (x+larg)>canvas.width || (x+larg <= 0) ? velX*=-1 : velX*=1;
    x += velX;
    y += velY;
    requestAnimationFrame(loop);
}
loop();




