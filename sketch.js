var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(200,100,50,80);
  gameObject1.shapeColor="white";
  gameObject2=createSprite(400,100,50,80);
  gameObject2.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  drawSprites();
 if (isTouching(fixedRect,movingRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }

 if (isTouching(gameObject1,movingRect)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
 }
 else {
 gameObject1.shapeColor = "white";
 }

 if (isTouching(gameObject2,movingRect)){
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red";
 }
 else {
  gameObject2.shapeColor = "blue";
 }
}

function isTouching(object1,object2){
  //case1 object1 =movingRect  object2 =fixedRect
  //case2 object1 =movingRect  object2 =gameObject1
  //case3 object1 =movingRect  object2 =gameObject2
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
  return false;
}
}