var movingsq
var sq1,sq2,sq3,sq4




function setup() {
  createCanvas(1200,800);
  movingsq=createSprite(400,200,80,30)
  sq1=createSprite(500,200,50,80)
  sq2=createSprite(1100,200,50,80)
  sq3=createSprite(200,200,50,80)
  sq4=createSprite(100,200,50,80)
  sq1.shapeColor="red"
  sq2.shapeColor="red"
  sq3.shapeColor="red"
  sq4.shapeColor="red"
  movingsq.shapeColor="red"
  sq2.velocityX=-2;
  sq3.velocityX=2;
}

function draw() {
  background("blue");  
  movingsq.x=World.mouseX
  movingsq.y=World.mouseY
  if(isTouching(sq2,movingsq)){
    
    sq1.shapeColor="yellow"
    movingsq.shapeColor="yellow"
  }else{
    sq1.shapeColor="red"
    movingsq.shapeColor="red"
    
  }
  bounceoff(sq2,sq3)
  


  drawSprites();
}
