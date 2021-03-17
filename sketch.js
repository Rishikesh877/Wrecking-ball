const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    box6 = new Box(810,170,70,70);
    box7 = new Box(810,180,70,70);
    box8 = new Box(810,190,70,70);
    box9 = new Box(700,330,70,70);
    box10 = new Box(700,340,70,70);
    box11 = new Box(920,330,70,70);
    box12 = new Box(920,340,70,70);
    ball1 = new Ball(10,200,40);

    rope = new Chain(ball1.body,{x:520,y:50})

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
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
    ball1.display();
    rope.display();


}