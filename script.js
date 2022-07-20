const particle = document.getElementById('Particle');
const ctx = particle.getContext('2d');

/* Definition of the width in canva */
particle.width = window.innerWidth;
particle.height = window.innerHeight;

const mouse = {
    x: null,
    y: null
}

particle.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});
x=0;
if(x == 1){
particle.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
});
}

function drawCircle(){
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 2,0, Math.PI * 2);
    ctx.fill();
}
drawCircle()

// ctx.fillStyle = 'white';
// ctx.strokeStyle = 'white';
// ctx.lineWidth = 5;
// ctx.beginPath();
// ctx.arc(150, 100, 5, 0,  Math.PI * 2);
// ctx.stroke();

console.log(ctx);


function func(){
    x=1;
}   