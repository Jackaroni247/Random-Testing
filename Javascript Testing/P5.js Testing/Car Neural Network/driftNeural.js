var ringIN = 300;
var ringOUT = 700;

var Cars = [];
var numCars = 10;

function setup() {
    createCanvas(1000, 800);
    background(186, 240, 255);

    //Goes through and creates all of the car objects;
    for (var i = 0; i < numCars; i++) {
        Cars[i] = new Car(250, 400);
    }
}

function draw() {
    background(186, 240, 255);

    //Ticks to check for user input
    controlTick();

    //Goes through each car and simulates and draws
    for (var i = 0; i < numCars; i++) {
        if (!Cars[i].dead) {
            Cars[i].tick();
            Cars[i].draw();
        }
    }

    //Draws the track
    drawTrack();
}

    //Draws the track
function drawTrack() {
    strokeWeight(20);
    noFill();
    circle(500, 400, ringIN);
    circle(500, 400, ringOUT);
}

    //Ticks to check for user input
function controlTick() {
    if (keyIsDown(RIGHT_ARROW)) {
        Cars[0].direction -= 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
        Cars[0].direction += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        Cars[0].engineForce = 10 * POP;
    } else {
        Cars[0].engineForce = 0;
    }
}
