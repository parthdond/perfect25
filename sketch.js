const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
     
dustbin = new Bottom(960,550,150,10)

     
    binPart1 = new Dustbin(900,505,10,200);
   
    binPart3 = new Dustbin(1025,505,10,200);
    crumpledPaper= new Paper(250,530,20);
    

   

}

function draw(){
    background(0);
    Engine.update(engine);

    
    
    ground.display();
    
    binPart1.display();
  
    binPart3.display(); 

    
    

    crumpledPaper.display();
    dustbin.display();
    
   
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-80});
    }
}
