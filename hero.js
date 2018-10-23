//create a hero with ES6 class
class Hero {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
        this.xPosition = 0;
        this.yPosition = 10;
    }
    sayName(){
        console.log(name);
    }
    returnGender(){
        console.log(gender);
    }
    moveForward(){
        console.log("Moved forward");
        this.xPosition = this.xPosition + 10;
        console.log(this.xPosition);
        gameCanvas.clearRect(80,60, 160,160);
        let rightSprite = new Image();
        rightSprite.src = "style/images/spritesheet.png";
        gameCanvas.webkitImageSmoothingEnabled = false;
        gameCanvas.mozImageSmoothingEnabled = false;
        gameCanvas.msImageSmoothingEnabled = false;
        gameCanvas.imageSmoothingEnabled = false;
        gameCanvas.drawImage(rightSprite, -5, -175, 160, 160, 0, 10, 80, 60);
    }
    moveBack(){
        console.log("Moved back");
        if (this.xPosition > 0){
            this.xPosition = this.xPosition - 10;
        }
        console.log(this.xPosition);
    }
    interact(){
        console.log("interaction");
    }
}

//set name in local storage
function getName(){
    localStorage.setItem("name", "Vikki");
    let name = localStorage.getItem("name");
    return name;
}

//set gender in local storage
function getGender(){
    localStorage.setItem("gender", "female");
    let gender = localStorage.getItem("gender");
    return gender;
}

for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
}

//key events-basic movement
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 32:
            chosenHero.interact();
            break;
        case 37:
            chosenHero.moveBack();
          break;
    //    case 38:
    //         alert('Up key pressed');
    //       break;
       case 39:
            chosenHero.moveForward();
            break;
    //    case 40:
    //         alert('Down key pressed');
    //       break;
    }
};

// let gameContainer = document.getElementById("gameContainer");
// let gameCanvas = gameContainer.getContext("2d");
let chosenHero = new Hero(getName(),getGender());


window.onload = function(){

    let initialSprite = new Image();
    initialSprite.src = "style/images/spritesheet.png";
    gameCanvas.webkitImageSmoothingEnabled = false;
    gameCanvas.mozImageSmoothingEnabled = false;
    gameCanvas.msImageSmoothingEnabled = false;
    gameCanvas.imageSmoothingEnabled = false;
    gameCanvas.drawImage(initialSprite, -5, -5, 160, 160, 0, 10, 80, 60);
}


