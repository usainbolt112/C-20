var fixedRect,movingRect;
var fixedBall,movingBall;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="Red";

  movingRect=createSprite(500,200,80,30);
  movingRect.shapeColor="red";

  fixedBall=createSprite(100,300,50,50);
  fixedBall.shapeColor="purple"
  fixedBall.velocityX=5;

  movingBall= createSprite(700,300,50,50);
  movingBall.shapeColor="purple"
  movingBall.velocityX=-5;
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(fixedRect.width/2+movingRect.width/2 > movingRect.x-fixedRect.x &&
    fixedRect.width/2+movingRect.width/2>fixedRect.x-movingRect.x && 
   fixedRect.height/2+movingRect.height/2>movingRect.y-fixedRect.y &&
   fixedRect.height/2+movingRect.height/2>fixedRect.y-movingRect.y 
    ){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";

  }
if(fixedBall.width/2+movingBall.width/2>movingBall.x-fixedBall.x &&
  fixedBall.width/2+movingBall.width/2>fixedBall.x-movingBall.x){
    fixedBall.velocityX=fixedBall.velocityX*(-1)
    movingBall.velocityX=movingBall.velocityX*(-1)
  }
if(fixedBall.height/2+movingBall.height/2>movingBall.y-fixedBall.y &&
  fixedBall.height/2+movingBall.height/2>fixedBall.y-movingBall.y){
    fixedBall.velocityY=fixedBall.velocityY*(-1)
    movingBall.velocityY=movingBall.velocityY*(-1)
  }
  drawSprites();
}