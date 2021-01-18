// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//All Variables
var man,thunder,thTimer,rain;

function setup() {

    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    //Give values to variables
    man = new Man(250, 400, 200, 300);
    thunder = new Thunder(250, 0, 1);
    rain = new Rain(800, 700);
    thTimer = 0;
}

function draw() {
    background("black");
    Engine.update(engine);

    //display objects
    man.display();
    rain.display();
    if (thunder != null) {
        thunder.display();

        if (thTimer < 1) {
            thTimer = round(random(75,150));
            thunder = null;
        }
    }
    else if (thTimer < 1) {
        thunder = new Thunder(round(random(50, 450)), 0, round(random(1, 4)));
        thTimer = round(random(75, 150));
    }

    thTimer--;
}