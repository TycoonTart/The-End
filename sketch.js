
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var mango1,mango2,mango3,
mango4,mango5,mango6,mango7
var tree
var boy1
var stone1
var launcher1
var forest
var gameState="Play"


function preload()
{
	forest=loadImage("forest.jpg")
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new mango(1000,250,40)
	mango2=new mango(950,275,40)
	mango3=new mango(1025,310,40)
	mango4=new mango(920,350,40)
	mango5=new mango(1075,350,40)
	mango6=new mango(850,475,40)
	mango7=new mango(1175,450,40)
	tree=new Tree(1000,500,10,10)
	boy1=new boy(200,800,100,100)
	stone1=new stone(195,805,50)
	launcher1=new launcher(stone1.body,{x:130,y:730});

	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(forest);
  Engine.update(engine)
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  boy1.display();
  stone1.display();
  launcher1.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  if(gameState==="End"){
	  fill("White")
	  textSize(70)
	  text("Game Over",500,500)
  }

}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,
		mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body,false);
			gameState="End"

		}
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    launcher1.fly()
  }

function keyPressed(){
	if(keyCode === 32 && gameState==="Play"){
		Matter.Body.setPosition(stone1.body,{x:130,y:730})
		launcher1.attach(stone1.body)
	}
}