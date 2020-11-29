const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world
var holder,ball,ground,stand1,stand2,slingshot,polygonimage,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16

//engine world ,holder,ball,ground,stand1,stand2,slingshot,polygonimage,function preload,create block 1 to 16
function preload() {

  
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  holder = createSprite()
  ball = createSprite()
  ground = createSprite()
  stand1 = createSprite()
  stand2 = createSprite()
  slingshot = new Slingshot(block.body,{x:200,y:400})
  block1 = new Block(200,50)
  block2 = new Block(200,60)
  block3 =new Block(200,70)
  block4 =new Block(200,80)
  block5 = new Block(200,90)
  block6 =new Block(200,100)
  block7 = new Block(190,50)
  block8 =new Block(180,60)
  block9 = new Block(170,50)
  block10 =new Block(160,40)
  block11 =new Block(190,40)
  block12 =new Block(189,60)
  block13 =new Block(177,50)
  block14 =new Block(190,66)
  block15 = new Block(200,99)
  block16 = new Block(200,100)
polygonimage = Bodies.circle(50,200,20)
World.add(world,polygonimage)

slingshot = new slingshot(this.polygon,{x:100,y:200})

}

function draw() {
  background(255,255,255);  


  drawSprites();
}