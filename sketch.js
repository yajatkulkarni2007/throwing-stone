
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var M1,M2,M3;
var T1;
var S1;
var B1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

M1=new Mango(700,400,5);
M1=new Mango(750,400,5);
M1=new Mango(800,400,5);
T1=new Tree(700,400,40,80);
B1=new Boy(500,400,40,40);
S1=new Stone (B1.body,{x:510,y:700});
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectcollision(S1,M1);
  detectcollision(S1,M2);
  detectcollision(S1,M3);

  drawSprites();
 
}
function display(){
	M1.display();
	M1.display();
	M1.display(); 
	T1.display();
	S1.display();
	B1.display();
}
function mouseDragged(){
Matter.Body.setPosition(B1,{x:mouse.X,y:mouse.Y});
}
function mouseReleasd(){
	S1.fly();
}
function keyPressed(){
	if(keyCode===32){
   Matter.Body.setPosition(S1,{x:510,y:700});
	launch.attach();
    }
}
