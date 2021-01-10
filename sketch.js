var dog, dogImage;
var background;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var obstacleImage, obstacleImage2;

function preload() {
  obstacleImage = loadImage("wood2.png");
  obstacleImage2 = loadImage("wood.png");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);

  dog = createSprite(20, 20, 20, 20);
  obstacle1 = createSprite(200, 100, 100, 20);
  obstacle1.addImage(obstacleImage);
  obstacle2 = createSprite(300, 450, 100, 20);
  obstacle2.addImage(obstacleImage2);
  obstacle3 = createSprite(197, 68, 110, 20);
  obstacle3.addImage(obstacleImage);
  obstacle4  = createSprite(400, 400, 79, 18);
  obstacle4.addImage(obstacleImage2);
  obstacle5 = createSprite(350, 250, 200, 20);
  obstacle5.addImage(obstacleImage);
  obstacle6 = createSprite(189, 182, 20, 140);
  obstacle6.addImage(obstacleImage2);
  obstacle7 = createSprite(237, 145, 20, 130);
  obstacle7.addImage(obstacleImage);

}

function draw() {
  background("orange"); 
  
  if(keyDown(LEFT_ARROW)){
    dog.x = dog.x - 3;
  }
  if(keyDown(RIGHT_ARROW)){
    dog.x = dog.x +3;
  }
  if(keyDown(UP_ARROW)){
    dog.y = dog.y -3;
  }
  if(keyDown(DOWN_ARROW)){
    dog.y = dog.y +3;
  }


  drawSprites();
}
