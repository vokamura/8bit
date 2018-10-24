//Create canvas and get rendering context and drawing functions
let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");

gameCanvas.width = 700;
gameCanvas.height = 500;

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
    console.log("Main game running");
    chosenHero.heroReady = true;
    console.log(chosenHero.heroImage);
    
    //load hero when ready
    if(chosenHero.heroReady){
        console.log("Hero is ready");
        chosenHero.heroImage.onload = function(){
            ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
        }
    }
}

runGame();