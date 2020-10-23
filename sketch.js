const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bg, helicopterImg, helicopter, parcelImg, parcel, box;
var drop;

function preload() {
    bg = loadImage("bg.jpg");
    helicopterImg = loadImage("helicopter.png");
    parcelImg = loadImage("parcel.png");
    drop = loadSound("drop.mp3");
}

function setup() {
    createCanvas(900, 600);

    engine = Engine.create();
    world = engine.world;

    box = Bodies.rectangle(560, 180, 20, 20, {
        restitution: 1,
        isStatic: true
    });
    World.add(world, box);
    ground = new Static(width / 2, height - 10, width, 50);

    parcel = createSprite(box.position.x, box.position.y);
    parcel.addImage("parcelImg", parcelImg);
    parcel.scale = 0.9;

    helicopter = createSprite(480, 150);
    helicopter.addImage("helicopterImg", helicopterImg);
    helicopter.scale = 1.2;

    World.add(world, box);

    Engine.run(engine);
}

function keyPressed() {
    if (keyCode == DOWN_ARROW) {
        drop.play();
        Matter.Body.setStatic(box, false);
    }
}

function draw() {
    background(bg);
    parcel.x = box.position.x;
    parcel.y = box.position.y - 33;
    Engine.update(engine);
    ground.show();
    if(parcel.y>=522)
    drop.stop();
    drawSprites();
}