console.log('Creating an HTML canvas');

let canvas = document.getElementById('draw');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDraw = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let dir = true;

function draw(e){
    if(!isDraw) return;
    
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();

    [lastX,lastY] = [e.offsetX,e.offsetY];
    hue++;
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
        dir = !dir;
    if(dir)
        ctx.lineWidth++;
    else
        ctx.lineWidth--;
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown',(e) => {
    isDraw = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
});
canvas.addEventListener('mouseup', () => isDraw = false);
canvas.addEventListener('mouseout', () => isDraw = false);