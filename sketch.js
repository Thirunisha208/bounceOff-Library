var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  a = createSprite(200,400,50,80);
  a.shapeColor = "blue";
  a.velocityY = -4;

  b = createSprite(200,50,50,80);
  b.shapeColor = "blue";
  b.velocityY = +4;
}

function draw() {
  background(0,0,0);  

 bounceoff(movingRect,fixedRect);
 bounceoff(a,b);
  drawSprites();
}

