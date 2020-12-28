const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine
const Constraint = Matter.Constraint


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world

  ground = new Ground(600,560,1200,10);
  ball = new Ball(630,400,20);
  Chain = new Sling(ball.body,{x: 630, y: 50});

  box1 = new Box(740,100,40,40);
  box2 = new Box(740,100,40,40);
  box3 = new Box(740,100,40,40);
  box4 = new Box(740,100,40,40);
  box5 = new Box(740,100,40,40);
  box6 = new Box(740,100,40,40);
  box7 = new Box(740,100,40,40);
  box8 = new Box(740,100,40,40);
  box9 = new Box(740,100,40,40);

  box10 = new Box(830,100,40,40);
  box11 = new Box(830,100,40,40);
  box12 = new Box(830,100,40,40);
  box13 = new Box(830,100,40,40);
  box14 = new Box(830,100,40,40);
  box15 = new Box(830,100,40,40);
  box16 = new Box(830,100,40,40);

  box17 = new Box(900,100,40,40);
  box18 = new Box(900,100,40,40);
  box19 = new Box(900,100,40,40);
  box20 = new Box(900,100,40,40);
  box21 = new Box(900,100,40,40);
  box22 = new Box(900,100,40,40);
  box23 = new Box(900,100,40,40);
  box24 = new Box(900,100,40,40);
  box25 = new Box(900,100,40,40);

}

function draw() {
  background("lightblue");  
  Engine.update(engine);

  ground.display();
  ball.display();
  Chain.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
}

function mouseDragged(){
  Matter.Body.applyForce(ball.body, ball.body.position, {x:-7, y:-7});
}