

function loadCanvas(){
    gameCanvas.width = 700;
    gameCanvas.height = 500;
    gameCanvas.style.border = "1px solid #000000";
    document.getElementById("container").appendChild(gameCanvas);
}

function loadBackground(){
    ctx.beginPath();
    ctx.rect(0, 0, 700, 500);
    ctx.fillStyle = "green";
    ctx.fill();
}

function loadDoor(){
    firstDoor.doorReady = true;
    firstDoor.xPosition, firstDoor.yPosition = Math.random() * (gameCanvas.width - 100);
    // firstDoor.yPosition = Math.random() * (gameCanvas.width - 100);
    if(firstDoor.doorReady){
        firstDoor.doorImage.onload = function(){
            ctx.drawImage(firstDoor.doorImage, firstDoor.xPosition, firstDoor.yPosition);
        }
    }
}

class Door {
    constructor(){
        this.xPosition = 0;
        this.yPosition = 0;
        this.doorReady = false;
        this.doorImage = new Image();
        this.doorImage.src = "style/images/environment/door.png";
    }
    drawDoor(){
        ctx.drawImage(firstDoor.doorImage, firstDoor.xPosition, firstDoor.yPosition);
        console.log("this works",  "x = ", this.xPosition);
    }
}

function loadHero(){
    chosenHero.heroReady = true;
    if(chosenHero.heroReady){
        chosenHero.heroImage.onload = function(){
            ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
        }
    }
}

function runGame() {
    loadBackground();
    loadDoor();
    loadHero();
}

let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");
let chosenHero = new Hero(getName(),getGender());
let firstDoor = new Door();

loadCanvas();
runGame();