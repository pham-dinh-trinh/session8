let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,100,40,0,2* Math.PI);
ctx.stroke();

