

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
    let shadow = document.getElementsByClassName("askQuestionShadow")[0];
    shadow.style.visibility = "visible";

    let askBody = document.getElementsByClassName("askQuestionBody")[0];

    //Create Question form
    let askQuestion = document.createElement("form");

    //Create question for name
    let nameLabel = document.createElement("label");
    let askName = document.createElement("input");
    nameLabel.for = askName;
    nameLabel.textContent = "What is your name?";
    askQuestion.append(nameLabel);
    askQuestion.append(askName);

    //Create question for gender selection dropdown
    let genderLabel = document.createElement("label");
    let askGender = document.createElement("select");
    genderLabel.for = askGender;
    genderLabel.textContent = "What is your gender?";
    askQuestion.append(genderLabel);

    let male = document.createElement("option");
    male.value = "male";
    male.textContent = "Male";
    askGender.append(male);

    let female = document.createElement("option");
    female.value = "female";
    female.textContent = "Female";
    askGender.append(female);

    let other = document.createElement("option");
    other.value = "other";
    other.textContent = "Other";
    askGender.append(other);

    //Append questions to body
    askQuestion.append(askGender);
    askBody.append(askQuestion);

    // let introTitle = document.createElement("h2");
    // introTitle.classList.add("intro");
    // introTitle.textContent = "Good morning!";
    // askBody.append(introTitle);

    // let introBody = document.createElement("div");
    // introBody.classList.add("intro");
    // introBody.textContent = "It is Saturday morning and it is your SO's birthday!";
    // askBody.append(introBody);

}

function cloaseQuestions(){
    document.getElementsByClassName("askNameShadow")[0].style.visibility = "hidden";
}

runGame();