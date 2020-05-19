var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;

	

//1500,600
function setup() {
	createCanvas(900, 500);


	engine = Engine.create();

	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	paper = new Paper();
	ground = new Ground();
	bin = new Dustbin();
	Engine.run(engine);
  
}
function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})

	}

}



function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  paper.display();
	bin.display();
 
}



