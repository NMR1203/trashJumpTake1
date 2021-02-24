const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Render = Matter.Render;

var ball, ground, ceiling;
var wall1, wall2;
var collectibleGroup, collectible;
var score = 0;
var world;

function setup(){
	createCanvas(1600,700);
	rectMode(CENTER)
	
	engine = Engine.create();
	world = engine.world;
	
	ball = new Paper(200,450,40);
	
	ground = new Ground(width/2,700,width,20);

	ceiling = new Ground(width/2, 0,width,20)

	wall1 = new Ground(100, 300,20,800);
	wall2 = new Ground(1500, 300,20,800);

	collectibleGroup = new Group();

	Engine.run(engine);
}
function draw(){
	rectMode(CENTER);
	background(0);
	
	textSize(25);
	fill("white");
	stroke(15);
	text("score = "+ score,125,75);	

	if(collectibleGroup.isTouching(ball)){
		collectibleGroup.destroyEach();
		score = score + 1;
	}
	
	spawn();

	ball.display();
	ground.display();
	wall1.display();
	wall2.display();
	ceiling.display();
}

function spawn(){
	if(frameCount %100 === 0){
		collectible = createSprite(250,100,100,100);
		collectible.y = random(75,600);

		collectibleGroup.add(collectible);
	}
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});	
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-85,y:-85});
	}
} 