var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, wall, wall2, wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 800, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 180, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	wallSprite=createSprite(width/2,height-50,200,20);
	wallSprite.shapeColor="red";

	wallSprite2=createSprite(width/2-90,height-100,20,100);
	wallSprite2.shapeColor="red";

	wallSprite2=createSprite(width/2+90,height-100,20,100);
	wallSprite2.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.3, isStatic:true});
	World.add(world, packageBody);
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	wall = Bodies.rectangle(width/2, height-45, 150, 10 , {isStatic:false} );
	wall2 = Bodies.rectangle(width/2, height-45, 150, 10 , {isStatic:false} );
	wall3 = Bodies.rectangle(width/2, height-45, 150, 10 , {isStatic:false} );

	World.add(world, wall);
	World.add(world, ground);
	World.add(world,wall2);
	World.add(world,wall3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y -20;
  
  


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
    
  }
}



