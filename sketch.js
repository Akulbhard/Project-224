
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	
	groundSprite.shapeColor=color(255)
	box1 = new Dustbin(550,650,200,20);
	box2 = new Dustbin(650,600,20,200);
	box3 = new Dustbin(450,600,20,200);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ball = new paper(200,648,30);
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  box1.display();
  box2.display();
  box3.display();
  ball .display();
 
}


function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position, {x:120, y:-120});
	 }
   }
   
   



