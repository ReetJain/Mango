const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(windowWidth, windowHeight-4);


	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);

	tree = new Tree(600, 500, 50, 50);
  
}

function draw() {
	rectMode(CENTER);
    background(200);
  
	tree.display();
	drawSprites();
}