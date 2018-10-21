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

function getName(){
    localStorage.setItem("name", "Vikki");
    let name = localStorage.getItem("name");
    return name;
}

function getGender(){
    localStorage.setItem("gender", "female");
    let gender = localStorage.getItem("gender");
    return gender;
}

console.log(hero1);

for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
}

//basic movement
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