var shipImg,ship,seaImge,sea;
function preload() {
  
 shipImg=loadAnimation("ship1.png", "ship2.png") 
 seaImge=loadImage("sea.jpg") 

}
function setup() {
  createCanvas(600,300);
  
  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.2
sea=createSprite(10,200,600,10);
sea.x=sea.width/2
sea.velocityX=-2;
sea.visible=false
}



ship.velocityY = ship.velocityY + 0.8

if (sea.x < 0) {
  sea.x = sea.width / 2;
}

ship.collide(sea);
   

function draw() {
  background(seaImg);



  if(keyDown("right")){
    ship.velocityX=5;
  }
 if(keyDown("left")){
   ship.velocityX=-5;
 }

 if(keyDown("space")){
   ship.velocityX=0;
 }

ship.collide(sea);
 drawSprites();
}