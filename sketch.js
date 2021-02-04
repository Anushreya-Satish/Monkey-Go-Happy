//memory for sprites
var monkey, ground;

//memory for image sprites
var monkey_running, bananaImage, obstacleImage;

var score;

function preload(){

  //loading images for monkey
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //loading image for banana
  bananaImage = loadImage("banana.png");
  
  //loading image for obstacle
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);
  
  // creating the monkey
  monkey = createSprite(40, 245, 10, 20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  //creating the ground
  ground = createSprite(300, 350 , 600, 100);
  ground.velocityX = -4;
  ground.shapeColor = "green";

  //creating new groups
  obstaclesGroup = new Group();
  foodGroup = new Group();
  
  score = 0;
  
}

function draw() {
  background("lightblue");

  if (ground.x < 600){
      ground.x = 300;
    }
  
  
  //stop monkey from falling out of the canvas
  monkey.collide(ground);
  
    //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -5;
    }
  
   //given gravity
    monkey.velocityY = monkey.velocityY + 0.8;

  //survival time
  var survivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time : "+survivalTime,10,20);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score : " + score, 480,20)
  
  //calling obstacles and bananas function
  Obstacles();
  Bananas();
  
  
  drawSprites();

}

function Bananas(){
  if(frameCount % 80 === 0){
  var banana = createSprite(900, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.collide(ground);
    banana.lifetime = 300;
  }
}
function Obstacles(){
  var obstacle;
  if(frameCount% 300 === 0){
  obstacle = createSprite(900, 300);
  obstacle.velocityX = -6;
  obstacle.addImage(obstacleImage);
  obstacle.collide(ground);
  obstacle.lifetime = 300;  
  obstacle.scale = 0.1;
    
  }
}