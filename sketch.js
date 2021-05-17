const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var snow = [];

function preload(){
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;

  
  Engine.run(engine);
}

function draw() {
  background(bg);  
  Engine.update(engine);
   
  if(frameCount%40===0){
    snow.push(new snowfall(random(width/2-10,width/2+10),20,20));
  }

 

  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
  }
}