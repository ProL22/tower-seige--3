const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload() {
  backgroundImg = loadImage("sprites/bg.png");
  gettime();
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,390,1200,10);
  block1 = new Box(330,235,30,40);
  block2 = new Box(360,235,30,40);
  block3 = new Box(390,235,30,40);
  block4 = new Box(420,235,30,40);
  block5 = new Box(450,235,30,40);
  block6 = new Box(360,195,30,40);
  block7 = new Box(390,195,30,40); 
  block8 = new Box(420,195,30,40);
  block9 = new Box(390,155,30,40);
  hero = new Box(100,235,40,40)
  slingshot1 = new SlingShot(hero.body,{x:90,y:220});

  
}

function draw() {
  if(backgroundImg){
  Engine.update(engine);
  background(backgroundImg);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  hero.display();
  slingshot1.display();
  ground.display();
  drawSprites();
}
}
function mouseDragged(){
 Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot1.fly();
  
}
async function gettime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var datetime =  responseJSON.datetime
  var hours = datetime.slice(11,13);
  if(hours >=6 && hours <=18){
      bg=("sprites/bg.png")
  } 
  else{
      bg=("sprites/bg2.jpg")
  }
  backgroundImg=loadImage(bg);
}
async function gettime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var datetime =  responseJSON.datetime
  var hours = datetime.slice(11,13);
  if(hours >=6 && hours <=18){
      bg=("sprites/bg.png")
  } 
  else{
      bg=("sprites/bg2.jpg")
  }
  backgroundImg=loadImage(bg);
}