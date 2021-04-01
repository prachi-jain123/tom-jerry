var cat, catimg1, catimg2, catimg3, catimg4;
var mouse, mouseimg1, mouseimg2, mouseimg3, mouseimg4;
var bgimg;

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    mouseimg1 = loadImage("images/mouse1.png");
    catimg1 = loadImage("images/cat1.png");
    mouseimg2 = loadImage("images/mouse2.png");
    catimg2 = loadImage("images/cat2.png");
    mouseimg3 = loadImage("images/mouse3.png");
    catimg3 = loadImage("images/cat3.png");
    mouseimg4 = loadImage("images/mouse4.png");
    catimg4 = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
 cat = createSprite(600, 680, 10, 10);
 cat.addAnimation(catimg1);
 mouse = createSprite(200, 700, 10,10);
 mouse.addAnimation(mouseimg1);
}

function draw() {

    background("bgimg");
    //Write condition here to evalute if tom and jerry collide
 if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
     cat.changeAnimation(catimg4);
     mouse.changeAnimation(mouseimg2);
 }
  keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === RIGHT_ARROW) {
    mouse.addAnimation("mouseteasing", mouseimg3);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay = 25;
 }
 
 if (keyCode === RIGHT_ARROW) {
     cat.addAnimation("catrunning", catimg2);
     cat.changeAnimation("catrunning");
 }
}
