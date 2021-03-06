var ground, groundImage;
var sonic, sonicImage;
var obstacle, obstacleImage, obstacleGroup;
var gameState = "PLAY";


function preload(){
  
  groundImage = 
    loadImage("background.png");
  
  sonicImage = 
    loadImage("sonicRunning.png");
  
  obstacleImage = 
    loadImage("spikes.png");
  
}


function setup() {
  createCanvas(400, 400);

  ground = createSprite(200,200,30,30);
  ground.x = ground.width/2;
  ground.velocityX = -6;
  ground.scale = 2;
  
  sonic = createSprite(200,130,20,20);
  sonic.addImage(sonicImage);
  sonic.scale = 0.3;
  
  obstacleGroup = new Group();
  
  
}

function draw() {
  background(220);
  if(ground.x<100){
    ground.x = ground.width/2;
    ground.addImage(groundImage);
  }
  
  if(keyDown("right")){
    sonic.x = sonic.x+1;
  }
  
  if(keyDown("down")){
    sonic.y = sonic.y+2;
  }
  
  if(keyDown("up")){
    sonic.velocityY = -1
    }
  if(sonic.y>330){
    sonic.velocityY = sonic.velocityY + 1;
  }
  
  spawnObstacles();
  drawSprites();

  
  if(gameState === "END"){
    sonic.destroy();
    obstacleGroup.destroyEach();
    background("white");
    textSize(20);
    stroke("purple");
    text("Game Over.", 150,200);
  }
  
  
  
  if(sonic.isTouching(obstacleGroup)){
    gameState = "END";
  
  }
  }


function spawnObstacles() {
  if(frameCount%50==0){
    obstacle = createSprite(500,Math.round(random(100,400)), 20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    sonic.depth = obstacle.depth;
    sonic.depth = obstacle.depth+1;
    obstacle.scale = 0.5;
    obstacleGroup.lifetime = 400;
    obstacleGroup.add(obstacle);
    
      
    }
  
  
}
  