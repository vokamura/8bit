//create a hero
class Hero {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
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

let hero1 = new Hero("Vikki");

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