// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc
/*
const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/

var engine, world;
var ground;
var cannon;
var nossle;
function setup() {
    // Setup the canvas, the ground , the tanker , the shooting ball and the bubble balls.
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(200,380,400,30);
  cannon=new Tanker(70,340,60,40);
  nossle=new Head(110,325,20,10);
  console.log(nossle);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background("white");
Engine.update(engine);
ground.display();
cannon.display();
nossle.display();
}

    
function keyReleased() {
    // Call the shoot method for the cannon.
}
