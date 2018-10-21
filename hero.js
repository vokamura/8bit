//create a hero with ES6 class
class Hero {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
    sayName(){
        console.log(name);
    }
    returnGender(){
        console.log(gender);
    }
    moveForward(){
        console.log("Moved forward");
    }
    moveBack(){
        console.log("Moved back");
    }
    interact(){
        console.log("interaction");
    }
}

let hero1 = new Hero(getName(),getGender());

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

console.log(hero1);

for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
}

//key events-basic movement
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 32:
            hero1.interact();
            break;
        case 37:
            hero1.moveBack();
          break;
    //    case 38:
    //         alert('Up key pressed');
    //       break;
       case 39:
            hero1.moveForward();
            break;
    //    case 40:
    //         alert('Down key pressed');
    //       break;
    }
};

window.onload = function(){
    let gameContainer = document.getElementById("gameContainer");
    let gameCanvas = gameContainer.getContext("2d");
    let initialSprite = new Image();
    initialSprite.src = "style/images/spritesheet.png";
    gameCanvas.drawImage(initialSprite, 10, 10);
}


