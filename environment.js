//Create canvas and get rendering context and drawing functions
let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");

gameCanvas.width = 700;
gameCanvas.height = 500;

gameCanvas.style.border = "1px solid #000000";
document.body.appendChild(gameCanvas);

//draw on canvas
window.onload = function(){
    if(heroReady){
        ctx.drawImage(heroImage, 0, 350);
    }
}
