var fixedRect, movingRect,gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,20,50);
  gameObject1.shapeColor="green";
  gameObject2 = createSprite(200,100,20,50);
  gameObject2.shapeColor="green";
  gameObject3 = createSprite(300,100,20,50);
  gameObject3.shapeColor="green";
gameObject1.velocityX=-5;
gameObject2.velocityX=9;
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)){
    
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor="blue";
  }
  else{
   
    movingRect.shapeColor = "green";
    gameObject2.shapeColor="green";
  }
  bounceOff(gameObject1,gameObject2);
  drawSprites();
}
