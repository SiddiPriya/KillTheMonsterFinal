const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

function preload() {
//preload the images here
backgrondImage=loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000,800);
  // create sprites here

  engine=Engine.create()
  world=engine.world

  ground=new Ground(600,600,3000,5)
  hero=new superHero(400,800,100,100)
  attach =new Throw(hero.body,{x:100,y:465})
  block1=new Block(700,100,50,40)
  block2=new Block(700,100,50,40)
  block3=new Block(700,100,50,40)
  block4=new Block(700,100,50,40)
  block5=new Block(700,100,50,40)
  block6=new Block(700,100,50,40)
  block7=new Block(700,100,50,40)
  block8=new Block(850,100,50,40)
  block9=new Block(850,100,50,40)
  block10=new Block(850,100,50,40)
  block11=new Block(850,100,50,40)
  block12=new Block(850,100,50,40)
  block13=new Block(850,100,50,40)
  block14=new Block(850,100,50,40)

  monster=new Monster(1100,550,100,100)

Engine.run(engine)
}

function draw() {
  rectMode(CENTER)
  background(backgrondImage);
Engine.update(engine)

  ground.display()
  fill("brown")
  stroke("green")
  strokeWeight(5)

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
attach.display()
hero.display()
  monster.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
