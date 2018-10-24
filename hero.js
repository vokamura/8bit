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
    localStorage.setItem("name", "John");
    let name = localStorage.getItem("name");
    return name;
}

//set gender in local storage
function getGender(){
    localStorage.setItem("gender", "male");
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
// let ctx = gameContainer.getContext("2d");
let chosenHero = new Hero(getName(),getGender());

//create hero
let heroReady = false;
let heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
}
heroImage.src = "style/images/boy_sprite/sprite_front_forward.png";

let heroSpeed = {speed: 250}