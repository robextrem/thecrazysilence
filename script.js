var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

var time = 0.0;
function mainLoop() {
    requestAnimationFrame(mainLoop);
    time += 0.01;
    
    //--->
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    
    context.translate(canvas.width / 2, canvas.height / 2);
    
    for(var i = 0; i < 360; i++) {
        context.beginPath();
        
        context.strokeStyle = `hsl(${i * 4}deg, 100%, 50%)`;
        
        var angle_1 = ((90 + i) + 180 * Math.sin(time)) * (Math.PI / 180);
        var angle_2 = ((180 + i) + 180 * Math.sin(time)) * (Math.PI / 180);
        var angle_3 = ((270 + i) + 180 * Math.sin(time)) * (Math.PI / 180);
        
        context.moveTo(-Math.cos(angle_1) * (canvas.width / 2 * Math.sin(time)), -Math.sin(angle_1) * (canvas.width / 2 * Math.sin(time)));
        
        context.lineTo(Math.cos(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time)), Math.sin(angle_2) * canvas.width / (7.5 * Math.cos(time) + 2.5 * Math.sin(time)));
        
        context.lineTo(Math.cos(angle_3) * canvas.width / 1, Math.sin(angle_3) * canvas.width / 1);
        
        context.closePath();
        context.stroke();
    }    
    
    context.restore();
    //<---
}

requestAnimationFrame(mainLoop);

window.addEventListener("DOMContentLoaded", event => {

  });

  gotothepartyyouandme = () => {
	setTimeout(() => {
		document.getElementById("button").style.display = "none";
		document.getElementById("party").style.display = "block";
	}, 500)
	const audio = document.querySelector("audio");
	audio.volume = 0.2;
	audio.play();
}