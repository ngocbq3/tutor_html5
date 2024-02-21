const canvas = document.querySelector("canvas");
canvas.width = 200;
canvas.height = 50;
const ctx = canvas.getContext("2d");

//vẽ hình
ctx.beginPath();
ctx.strokeStyle = "#02B0ED";
ctx.fillStyle = "#02B0ED";

ctx.moveTo(0, 25);
ctx.lineTo(90, 0);
ctx.lineTo(70, 25);
ctx.lineTo(90, 50);
ctx.lineTo(0, 25);
ctx.fill(); //đổ màu
ctx.stroke(); //kết thúc

//vẽ hình 2
ctx.beginPath();
ctx.strokeStyle = "#F5C50A";
ctx.fillStyle = "#F5C50A";

ctx.moveTo(110, 0);
ctx.lineTo(200, 25);
ctx.lineTo(110, 50);
ctx.lineTo(130, 25);
ctx.lineTo(110, 0);
ctx.fill();
ctx.stroke();
