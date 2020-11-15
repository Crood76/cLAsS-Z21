var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(touching(gameObject3, movingRect)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else{
    gameObject3.shapeColor = "gold";
    movingRect.shapeColor = "gold";
  }

  if(touching(gameObject1, movingRect)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    gameObject1.shapeColor = "gold";
    movingRect.shapeColor = "gold";
  }

  if(touching(gameObject2, movingRect)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    gameObject2.shapeColor = "gold";
    movingRect.shapeColor = "gold";
  }

  if(touching(gameObject4, movingRect)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else{
    gameObject4.shapeColor = "gold";
    movingRect.shapeColor = "gold";
  }
  
  drawSprites();
}


function touching(dogg, catt){
  if(dogg.x - catt.x < catt.width/2 + dogg.width/2
    && catt.x - dogg.x < catt.width/2 + dogg.width/2 
    && dogg.y - catt.y < catt.height/2 + dogg.height/2
    && catt.y - dogg.y < catt.height/2 + dogg.height/2 
    ){
     return true; 
   }
   else{
    return false;
   }
}
