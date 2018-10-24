let gameCanvas = document.createElement("canvas");

let ctx = gameCanvas.getContext("2d");

gameCanvas.width = 700;
gameCanvas.height = 500;

gameCanvas.style.border = "1px solid #000000";
document.body.appendChild(gameCanvas);

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;