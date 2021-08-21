var bgi;
var cat1,cat2;
var mouse1,mouse2;
function preload() {
    //load the images here
    bgi = loadImage("garden.png");
    cat1 = loadImage("cat1.png")
    mouse1 = loadImage("mouse1.png")
    cat2 = loadImage("cat2.png")
    mouse2= loadImage("mouse2.png")
 }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   background("bgi")

    if(cat1.x - mouse1.x < (cat1.width - mouse1.width)/2){


    }

    cat1.addImage("cat1");
    cat2.addImage("cat2");
    cat1.changeImage("cat2");

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse1.addImage(mouse1);
        mouse1.changeImage("mouse2")
        Matter.Body.applyForce(mouse1,{x:0,y:0},{x:0,y:0,05});
    
        }
    
    //left arrow 
    if(keycode === RIGHT_ARROW){
       mouse2.addImage(mouse2);
       mouse2.changeImage("mouse1")
       Matter.Body.applyForce(mouse2,{x:0,y:0},{x:0.05,y:0});
    }

}