//Create canvas and get rendering context and drawing functions
let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");

gameCanvas.width = 700;
gameCanvas.height = 500;

function loadBackground(){
    ctx.beginPath();
    ctx.rect(0, 0, 700, 500);
    ctx.fillStyle = "blue";
    ctx.fill();
}

gameCanvas.style.border = "1px solid #000000";
document.body.appendChild(gameCanvas);

//draw on canvas
// window.onload = function(){
    // if(chosenHero.heroReady){
    //     ctx.drawImage(chosenHero.heroImage, 0, 350);
    // }
// }
let chosenHero = new Hero(getName(),getGender());

function runGame() {
    loadBackground();
    chosenHero.heroReady = true;
    //load hero when ready
    if(chosenHero.heroReady){
        chosenHero.heroImage.onload = function(){
            ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
        }
    }
}

runGame();