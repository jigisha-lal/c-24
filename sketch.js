
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dust1,dust2,dust3,ball1;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();

	world = engine.world;

	ground = new Ground(600,height,1200,20);
	dust1= new Dustbin(1000,350,80,PI/2);
	dust2= new Dustbin(900,380,180,90);
	dust3= new Dustbin(800,350,80,PI/2);
    ball1= new Ball(350,150);
	Engine.run(engine);
  
}


function draw() {
  ellipseMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  ball1.display();

 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){

      Matter.Body.applyForce(ball1.body.position,{x:85,y:-85});
  }
} 



