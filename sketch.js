var garden,rabbit,apple,leaf,orangeLeaf,redImage;
var gardenImg,rabbitImg,appleImg,leafImg,orangeLeafImg,redImageImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redImageImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  var select_sprites = Math.round(random(1,4));
  if (frameCount % 100 == 0) {
  if (select_sprites  == 1) {
  createapples(); 
  }
  else if (select_sprites == 2) {
  createleaves(); 
  }
  else if (select_sprites == 3) {
   createorangeLeaves(); 
  } 
  else if (select_sprites == 4) {
    createredImage(); 
   } 
  }
function createapples() {
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY=5;
  apple.lifetime=150;
  }
  function createleaves() {
  leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage(leafImg);
  leaf.scale=0.1;
  leaf.velocityY=5;
  leaf.lifetime=150;
  }
  function createorangeLeaves() {
  orangeLeaf=createSprite(random(50,350),40,10,10)
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale=0.1;
  orangeLeaf.velocityY=5;
  orangeLeaf.lifetime=150;
  }
  function createredImage() {
  redImage=createSprite(random(50,350),40,10,10)
  redImage.addImage(redImageImg);
  redImage.scale=0.1;
  redImage.velocityY=5;
  redImage.lifetime=150;
    }
  
  drawSprites();
}
