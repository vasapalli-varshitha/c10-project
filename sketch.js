var ship, ship_moving ;
  
function preload(){
  
  createCanvas(600,200);
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
  sea = createSprite(550,200);
 ship = createSprite(350,230);
  seaImage = loadImage("sea.png");
}

function setup(){
  
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.1;
 sea.addImage("sea",seaImage);
  sea.scale =0.3;
  sea.velocityX=-0.2
  
    

}

function draw() {
  
  background("blue");
  drawSprites();
  if(sea.X<0){
   sea.X = sea.width/2;
  }
}