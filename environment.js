function loadCanvas(){
    gameCanvas.width = 800;
    gameCanvas.height = 550;
    gameCanvas.style.border = "1px solid #000000";
    document.getElementById("container").appendChild(gameCanvas);
    gameCanvas.classList.add("canvasPosition");
}

function loadBackground(){
    ctx.beginPath();
    ctx.rect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.fillStyle = "green";
    ctx.fill();
}

class Door {
    constructor(){
        this.xPosition = 0;
        this.yPosition = 0;
        this.doorReady = false;
        this.doorImage = new Image();
        this.doorImage.src = "style/images/environment/scooter.png";
    }
    drawDoor(){
        ctx.drawImage(firstDoor.doorImage, firstDoor.xPosition, firstDoor.yPosition);
    }
}

function loadScooter(){
    firstDoor.doorReady = true;
    firstDoor.xPosition = Math.random() * (gameCanvas.width - 250);
    firstDoor.yPosition = Math.random() * (gameCanvas.height - 250);
    if(firstDoor.doorReady){
        firstDoor.doorImage.onload = function(){
            ctx.drawImage(firstDoor.doorImage, firstDoor.xPosition, firstDoor.yPosition);
        }
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
    loadCanvas();
    loadBackground();
    loadScooter();
    loadHero();
}

let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");
// let chosenHero = new Hero(getName(),getGender(), getSOName(), getSOGender());
let chosenHero = new Hero();
let firstDoor = new Door();

runGame();