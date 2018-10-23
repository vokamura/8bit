let gameContainer = document.getElementById("gameContainer");

//creates drawing object
let ctx = gameContainer.getContext("2d");

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;