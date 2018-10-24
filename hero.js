//create a hero with ES6 class
class Hero {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
        this.xPosition = 0;
        this.yPosition = 350;
        this.heroReady = false;
        this.heroImage = new Image();
        this.heroImage.src = "style/images/boy_sprite/sprite_front_forward.png";
        this.heroSpeed = {speend: 250};
    }
    sayName(){
        console.log(name);
    }
    returnGender(){
        console.log(gender);
    }
    moveForward(){
        console.log("Moved forward");
        ctx.clearRect(chosenHero.xPosition, chosenHero.yPosition, 160, 160);
        this.xPosition = this.xPosition + 10;
        this.heroImage.src = "style/images/boy_sprite/sprite_right_stand.png";
        console.log(this.xPosition);
        ctx.drawImage(chosenHero.heroImage, chosenHero.xPosition, chosenHero.yPosition);
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

//create hero
// let heroReady = false;
// let heroImage = new Image();
// let chosenHero = new Hero(getName(),getGender());

// chosenHero.onload = function() {
//     console.log("Hero ready?");
//     chosenHero.heroReady = true;
// }

// Hero.heroImage.src = "style/images/boy_sprite/sprite_front_forward.png";

// let heroSpeed = {speed: 250}

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

//show items in local storage
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


