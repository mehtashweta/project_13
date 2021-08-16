var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves,leavesImg;

var select_sprites = Math.round(random(1,2));




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  
  appleImg = loadImage("apple.png")

  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
 apple = createSprite(random(50,350),40,10,10)
 apple.addImage(appleImg);
 apple.velocityY = 3;
 apple.lifetime = 133.33
 apples.scale = 0.1;
}


function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10)
  leaves.addImage(leavesImg);
  leaves.velocityY = 4;
  leaves.lifetime = 100
  leaves.scale = 0.1;
}

function draw() {
  background(0);

  rabbit.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

   
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else {
      createLeaves();
    }  
 }   
  
  drawSprites();
}