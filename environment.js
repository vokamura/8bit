

function loadCanvas(){
    gameCanvas.width = 700;
    gameCanvas.height = 500;
    gameCanvas.style.border = "1px solid #000000";
    document.getElementById("container").appendChild(gameCanvas);
    gameCanvas.classList.add("canvasPosition");
}

function loadBackground(){
    ctx.beginPath();
    ctx.rect(0, 0, 700, 500);
    ctx.fillStyle = "green";
    ctx.fill();
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
    }
}

function loadDoor(){
    firstDoor.doorReady = true;
    firstDoor.xPosition = Math.random() * (gameCanvas.width - 150);
    firstDoor.yPosition = Math.random() * (gameCanvas.width - 275);
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
    loadDoor();
    loadHero();
}

let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");
let chosenHero = new Hero(getName(),getGender());
let firstDoor = new Door();

function askQuestions(){
    console.log("This works");
    let shadow = document.getElementsByClassName("askNameShadow")[0]
    shadow.style.visibility = "visible";
    let introTitle = document.createElement("h2");
    introTitle.classList.add("introTitle");
    introTitle.textContent = "Welcome player!";
    shadow.append(introTitle);

}

function cloaseQuestions(){
    document.getElementsByClassName("askNameShadow")[0].style.visibility = "hidden";
}

runGame();